const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const { notFound, errorHandler } = require('./middleware/errorMiddleware');
const podcastRoutes = require('./routes/podcastRoutes');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
connectDB();

const app = express();
// middleware
// To allow body handler
app.use(express.json());
// GO DOWN

app.use('/api/podcasts', podcastRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send({ message: 'OK' });
});

app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
  console.log(`I am listening on ${process.env.PORT}`.yellow.bold);
});
