const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const podcasts = require('./data/podcasts');
const episodes = require('./data/episodes');

const connectDB = require('./config/db');

const podcastRoutes = require('./routes/podcastRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
dotenv.config();
// GO DOWN

connectDB();

// middleware
app.use('/api/podcasts', podcastRoutes);

app.get('/', (req, res) => {
  res.send({ message: 'OK' });
});

app.use(errorHandler);

app.use(notFound);

app.listen(process.env.PORT || 5000, () => {
  console.log(`I am listening on ${process.env.PORT}`.yellow.bold);
});
