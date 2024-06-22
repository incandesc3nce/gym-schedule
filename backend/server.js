require('dotenv').config({path: './backend/.env'})
const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());

app.listen(3000, () => console.log('Server started'));