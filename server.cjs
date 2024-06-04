require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

const uri = process.env.MONGODB_URI;
const secretKey = process.env.VITE_RECAPTCHA_SECRET_KEY;
const siteKey = process.env.VITE_RECAPTCHA_SITE_KEY;

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

let collection;

async function connectToDatabase() {
	try {
		await client.connect();
		console.log("Connected to MongoDB!");
		const database = client.db('db_cvs');
		collection = database.collection('collectionOfCvs');
	} catch (err) {
		console.error('Failed to connect to MongoDB', err);
		process.exit(1);
	}
}


app.post('/api/send-cv', async (req, res) => {
	const { name, email, telegram, experience, position, recaptchaToken } = req.body;

	try {
		const verificationUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/${siteKey}/assessments?key=${secretKey}`;
		const response = await fetch(verificationUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				event: {
					token: recaptchaToken,
					siteKey: siteKey,
					expectedAction: 'submit'
				}
			})
		});

		const data = await response.json();

		if (!data.tokenProperties.valid) {
			return res.status(400).json({ message: 'reCAPTCHA verification failed' });
		}

		const newCv = {
			id: Date.now().toString(),
			name,
			email,
			telegram,
			experience,
			position
		};

		await collection.insertOne(newCv);
		res.status(200).send('Form submitted successfully');
	} catch (err) {
		console.error('Error saving data:', err);
		res.status(500).send('Error saving data');
	}
});

app.get('/api/get-data', async (req, res) => {
	try {
		const cvs = await collection.find({}).toArray();
		res.json(cvs);
	} catch (err) {
		console.error('Error reading data:', err);
		res.status(500).send('Error reading data');
	}
});

app.delete('/api/delete-cv/:id', async (req, res) => {
	const { id } = req.params;

	try {
		await collection.deleteOne({ id });
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
