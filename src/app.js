const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();

const handleError = (err) => console.log(err);

const {
	PORT = 3005,
	API_URL = 'http://127.0.0.1',
	MONGO_URL = 'mongodb://127.0.0.1:27017/library',
} = process.env;

mongoose.connect(MONGO_URL).catch((error) => handleError(error));

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(routes);

app.use((request, response) => {
	response.status(404);
	response.send('404');
});

app.listen(PORT, () => {
	console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
