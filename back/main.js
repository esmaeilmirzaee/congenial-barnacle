const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const podcasts = require('./data/podcasts');
const episodes = require('./data/episodes');

const connectDB = require('./config/db');

const podcastRoutes = require('./routes/podcastRoutes');

const app = express();
dotenv.config();
// GO DOWN

connectDB();

// middleware
app.use('/api/podcasts', podcastRoutes);

app.get('/', (req, res) => {
  res.send({ message: 'OK' });
});

app.get('/api/podcasts', (req, res) => {
  res.json(podcasts);
});

app.get('/api/podcasts/:id', (req, res) => {
  let podcast = podcasts.find((p) => p._id === req.params.id);
  res.json(podcast);
});

app.get('/api/podcasts/:id/episodes', (req, res) => {
  let episode = episodes.find((e) => e._id === Number(req.params.id));
  res.json(episode);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`I am listening on ${process.env.PORT}`.yellow.bold);
});
