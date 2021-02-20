const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');
// const { urlencoded } = require('body-parser');

const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const podcastRoutes = require('./routes/podcastRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();
// middleware
// To allow body handler
// GO DOWN
app.use(cors());
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/podcasts', podcastRoutes);
app.use('/api/user', userRoutes);

app.use(errorHandler);
app.use(notFound);

app.get('/', (req, res) => {
  res.send({ message: 'OK' });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`I am listening on ${process.env.PORT}`.yellow.bold);
});
