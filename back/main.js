const express = require('express');
const podcasts = require('./data/podcasts');
const app = express();

let port = '5000';

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

app.listen(port, () => {
  console.log(`I am listening on ${port}`);
});
