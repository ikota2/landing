const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const fs = require('fs');
const os = require('os');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

// const dataFilePath = path.join(__dirname, 'data.json');
const dataFilePath = path.join(os.tmpdir(), 'data.json');


app.post('/api/send-cv', (req, res) => {
	const { name, email, telegram, experience, position } = req.body;
	const newCv = {
		id: Date.now().toString(),
		name,
		email,
		telegram,
		experience,
		position
	};

	fs.readFile(dataFilePath, (err, data) => {
		if (err && err.code === 'ENOENT') {
			// File does not exist, create it
			return fs.writeFile(dataFilePath, JSON.stringify([newCv], null, 2), (err) => {
				if (err) {
					console.error('Error writing file:', err.name, err.message);
					return res.status(500).send(err.name + ' ' + err.message);
				}
				return res.status(200).send('Form submitted successfully');
			});
		}

		if (err) {
			console.error('Error reading file:', err);
			return res.status(500).send('Error reading data');
		}

		const cvs = JSON.parse(data);
		cvs.push(newCv);

		fs.writeFile(dataFilePath, JSON.stringify(cvs, null, 2), (err) => {
			if (err) {
				console.error('Error writing file:', err);
				return res.status(500).send('Error saving data');
			}
			return res.status(200).send('Form submitted successfully');
		});
	});
});

app.get('/api/get-data', (req, res) => {
	fs.readFile(dataFilePath, (err, data) => {
		if (err) {
			console.error('Error reading file:', err);
			return res.status(500).send('Error reading data');
		}
		const cvs = JSON.parse(data);
		res.json(cvs);
	});
});

app.delete('/api/delete-cv/:id', (req, res) => {
	const { id } = req.params;

	fs.readFile(dataFilePath, (err, data) => {
		if (err) {
			console.error('Error reading file:', err);
			return res.status(500).send('Error reading data');
		}

		let cvs = JSON.parse(data);
		cvs = cvs.filter(cv => cv.id !== id);

		fs.writeFile(dataFilePath, JSON.stringify(cvs, null, 2), (err) => {
			if (err) {
				console.error('Error writing file:', err);
				return res.status(500).send('Error saving data');
			}
			res.status(200).send('CV deleted successfully');
		});
	});
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
