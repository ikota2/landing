// Импорт необходимых модулей
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

// Настройка CORS
app.use(cors());
// Настройка парсинга JSON данных
app.use(express.json());

// Маршрут для получения данных из формы
app.post('/send-cv', (req, res) => {
	const { name, email, telegram, experience, position } = req.body;

	// Логирование данных для проверки
	console.log('Form Data Received:');
	console.log(`Name: ${name}`);
	console.log(`Email: ${email}`);
	console.log(`Telegram: ${telegram}`);
	console.log(`Experience: ${experience}`);
	console.log(`Position: ${position}`);

	// Отправка ответа клиенту
	res.status(200).send('Form submitted successfully');
});

// Запуск сервера
app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
