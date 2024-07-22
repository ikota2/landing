require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const path = require('path');

const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;
const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret';

if (!uri) {
	console.error('MONGODB_URI environment variable not set');
	process.exit(1);
}

const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	}
});

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

let collectionCvs;
let collectionUsers;

async function connectToDatabase() {
	try {
		await client.connect();
		console.log("Connected to MongoDB!");
		const dbUsers = client.db('db_users')
		const dbCvs = client.db('db_cvs');
		collectionUsers = dbUsers.collection('collectionOfUsers');
		collectionCvs = dbCvs.collection('collectionOfCvs');
	} catch (err) {
		console.error('Failed to connect to MongoDB', err);
		process.exit(1);
	}
}

// function authenticateToken(req, res, next) {
// 	const authHeader = req.headers['authorization'];
// 	const token = authHeader && authHeader.split(' ')[1];
//
// 	if (!token) return res.sendStatus(401);
//
// 	jwt.verify(token, jwtSecret, (err, user) => {
// 		if (err) return res.sendStatus(403);
// 		req.user = user;
// 		next();
// 	});
// }


app.post('/api/login', async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await collectionUsers.findOne({ username });
		const dbPassword = await collectionUsers.findOne({ password });
		if (!user) {
			console.log('User was not found');
			return res.status(401).send('Invalid username');
		}
		if (!dbPassword) {
			return res.status(401).send('Invalid password')
		}
		// const isValid = await bcrypt.compare(password, user.passwordHash);
		// console.log('Password comparison result:', isValid);

		// if (!isValid) {
		// 	return res.status(401).send('Invalid username or password (jwt case)' + ' ' + `password: ${password} passwordHash: ${user.passwordHash}`);
		// }
		if (user && dbPassword) {
			const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
			return res.json({ token }).status(200);
		}
	} catch (err) {
		console.error('Error during login:', err);
		res.status(500).send('Error during login');
	}
});

// TODO
// app.post('/api/create-cv', authenticateToken, async (req, res) => {
// 	const { name, email, telegram, experience, position } = req.body;
// 	const newCv = {
// 		id: Date.now().toString(),
// 		name,
// 		email,
// 		telegram,
// 		experience,
// 		position
// 	};
//
// 	try {
// 		await collectionCvs.insertOne(newCv);
// 		res.status(200).send('New CV published successfully');
// 	} catch (err) {
// 		console.error('Error saving data:', err);
// 		res.status(500).send('Error saving data');
// 	}
// });

app.post('/api/send-cv', async (req, res) => {
	const { name, email, telegram, experience, position } = req.body;
	const newCv = {
		id: Date.now().toString(),
		name,
		email,
		telegram,
		experience,
		position
	};

	try {
		await collectionCvs.insertOne(newCv);
		res.status(200).send('Form submitted successfully');
	} catch (err) {
		console.error('Error saving data:', err);
		res.status(500).send('Error saving data');
	}
});

app.get('/api/get-data', async (req, res) => {
	try {
		const cvs = await collectionCvs.find({}).toArray();
		res.json(cvs);
	} catch (err) {
		console.error('Error reading data:', err);
		res.status(500).send('Error reading data');
	}
});

app.delete('/api/delete-cv/:id', async (req, res) => {
	const { id } = req.params;

	try {
		await collectionCvs.deleteOne({ id });
		res.status(200).send('CV deleted successfully');
	} catch (err) {
		console.error('Error deleting data:', err);
		res.status(500).send('Error deleting data');
	}
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

connectToDatabase().then(() => {
	app.listen(port, () => {
		console.log(`Server is running at http://localhost:${port}`);
	});
}).catch(console.error);
