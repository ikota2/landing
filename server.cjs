require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const bcrypt = require('bcrypt');
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

let collectionOfCvs;
let collectionUsers;
let collectionOfRemotes;
let collectionOfOnSites;

async function connectToDatabase() {
	try {
		await client.connect();
		console.log("Connected to MongoDB!");
		const dbUsers = client.db('db_users')
		const dbCvs = client.db('db_cvs');
		const dbVacancies = client.db('db_vacancies');
		collectionUsers = dbUsers.collection('collectionOfUsers');
		collectionOfCvs = dbCvs.collection('collectionOfCvs');
		collectionOfRemotes = dbVacancies.collection('collectionOfRemotes');
		collectionOfOnSites = dbVacancies.collection('collectionOfOnSites');
	} catch (err) {
		console.error('Failed to connect to MongoDB', err);
		process.exit(1);
	}
}

function authenticateToken(req, res, next) {
	const authHeader = req.headers['authorization'];
	const token = authHeader && authHeader.split(' ')[1];

	if (!token) return res.sendStatus(401);

	jwt.verify(token, jwtSecret, (err, user) => {
		if (err) return res.sendStatus(403);
		req.user = user;
		next();
	});
}

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
		await collectionOfCvs.insertOne(newCv);
		return res.status(200).send('Form submitted successfully');
	} catch (err) {
		return res.status(500).send('Error saving data');
	}
});

// TODO check
app.get('/api/get-onsite-vacancies', async (req, res) => {
	try {
		const vacancies = await collectionOfOnSites.find({}).toArray();
		return res.json(vacancies);
	} catch (err) {
		return res.status(500).send('Error retrieving on-site vacancies');
	}
});

// TODO check
app.get('/api/get-remote-vacancies', async (req, res) => {
	try {
		const vacancies = await collectionOfRemotes.find({}).toArray();
		return res.json(vacancies);
	} catch (err) {
		return res.status(500).send('Error retrieving remote vacancies');
	}
});

// admin api
app.post('/api/login', async (req, res) => {
	const { username, password } = req.body;
	try {
		const user = await collectionUsers.findOne({ username });
		if (!user) {
			console.log('User was not found');
			return res.status(401).send('Invalid username');
		}
		const isValid = await bcrypt.compare(password, user.passwordHash);
		if (!isValid) {
			console.log('Invalid password');
			return res.status(401).send('Invalid password');
		}
		const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '1h' });
		return res.status(200).json({ token });
	} catch (err) {
		console.error('Error during login:', err);
		return res.status(500).send('Error during login');
	}
});

app.get('/api/get-cvs', authenticateToken, async (req, res) => {
	try {
		// returns collection.length
		// const size = await collectionOfCvs.countDocuments();
		// return res.json(size);
		const cvs = await collectionOfCvs.findOne('collectionOfCvs');
		return res.json(cvs);
	} catch (err) {
		return res.status(500).send('Error reading data');
	}
});

app.delete('/api/delete-cv/:id', async (req, res) => {
	const { id } = req.params;

	try {
		await collectionOfCvs.deleteOne({ id });
		return res.status(200).send('CV deleted successfully');
	} catch (err) {
		return res.status(500).send('Error deleting data');
	}
});

app.post('/api/create-onsite-vacancy', authenticateToken, async (req, res) => {
	const { id, username, responsibilities, requirements, conditions, salary } = req.body;
	const newVacancy = {
		id,
		username,
		responsibilities,
		requirements,
		conditions,
		salary
	};

	try {
		await collectionOfOnSites.insertOne(newVacancy);
		return res.status(200).send('On-site vacancy created successfully');
	} catch (err) {
		return res.status(500).send('Error creating on-site vacancy');
	}
});

app.post('/api/create-remote-vacancy', authenticateToken, async (req, res) => {
	const { id, username, responsibilities, requirements, conditions, salary } = req.body;
	const newVacancy = {
		id,
		username,
		responsibilities,
		requirements,
		conditions,
		salary
	};

	try {
		await collectionOfRemotes.insertOne(newVacancy);
		return res.status(200).send('Remote vacancy created successfully');
	} catch (err) {
		return res.status(500).send('Error creating remote vacancy');
	}
});

app.get('/api/get-onsite-vacancies', authenticateToken, async (req, res) => {
	try {
		const vacancies = await collectionOfOnSites.findOne('collectionOfRemotes');
		return res.json(vacancies);
	} catch (err) {
		return res.status(500).send('Error retrieving on-site vacancies');
	}
});

app.get('/api/get-remote-vacancies', authenticateToken, async (req, res) => {
	try {
		const vacancies = await collectionOfRemotes.findOne('collectionOfRemotes');
		return res.json(vacancies);
	} catch (err) {
		return res.status(500).send('Error retrieving remote vacancies');
	}
});

app.delete('/api/remove-onsite-vacancy/:id', authenticateToken, async (req, res) => {
	const { id } = req.params;

	try {
		await collectionOfOnSites.deleteOne({ id });
		return res.status(200).send('On-site vacancy was deleted successfully');
	} catch (err) {
		return	res.status(500).send('Error deleting on-site vacancy');
	}
});

app.delete('/api/remove-remote-vacancy/:id', authenticateToken, async (req, res) => {
	const { id } = req.params;

	try {
		await collectionOfRemotes.deleteOne({ id });
		return res.status(200).send('Remote vacancy was deleted successfully');
	} catch (err) {
		return res.status(500).send('Error deleting remote vacancy');
	}
});

app.post('/api/edit-onsite-vacancy/:id', authenticateToken, async (req, res) => {
	const { id } = req.params;
	const { username, responsibilities, requirements, conditions, salary } = req.body;

	try {
		await collectionOfOnSites.updateOne(
			{ id },
			{ $set: { username, responsibilities, requirements, conditions, salary: salary || null } }
		);
		return res.status(200).send('On-site vacancy updated successfully');
	} catch (err) {
		return res.status(500).send('Error updating on-site vacancy');
	}
});

app.post('/api/edit-remote-vacancy/:id', authenticateToken, async (req, res) => {
	const { id } = req.params;
	const { username, responsibilities, requirements, conditions, salary } = req.body;

	try {
		await collectionOfRemotes.updateOne(
			{ id },
			{ $set: { username, responsibilities, requirements, conditions, salary: salary || null } }
		);
		return res.status(200).send('Remote vacancy updated successfully');
	} catch (err) {
		return res.status(500).send('Error updating remote vacancy');
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
