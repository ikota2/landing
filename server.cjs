const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/send-cv', (req, res) => {
	res.status(200).send('Form submitted successfully');
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
