require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { errors } = require('celebrate');
const limiter = require('./middlewares/limiter');
const cors = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const routers = require('./routes/index');
const error = require('./middlewares/error');

const { PORT = 3000 } = process.env;
const { BASE = 'mongodb://localhost:27017/moviesdb' } = process.env;

const app = express();

app.use(requestLogger);

app.use(limiter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());

app.use(cors);
app.use(routers);

app.use(errorLogger);
app.use(errors());
app.use(error);

mongoose.connect(BASE);
app.listen(PORT);
