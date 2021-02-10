const mongoose = require('mongoose');
const colors = require('colors');

const dotenv = require('dotenv');
const connectDB = require('./config/db');

const Episode = require('./models/episodeModel');
const Podcast = require('./models/podcastModel');
const User = require('./models/userModel');

const users = require('./data/users');
const podcasts = require('./data/podcasts');
const episodes = require('./data/episodes');

dotenv.config();
connectDB();

const importDB = async () => {
  try {
    await Episode.deleteMany();
    await Podcast.deleteMany();
    await User.deleteMany();

    let createdUsers = await User.insertMany(users);
    let samplePodcasts = podcasts.map((p) => {
      return { ...p, user: createdUsers[0]._id };
    });
    let createdPodcasts = await Podcast.insertMany(samplePodcasts);

    let sampleEpisodes = episodes.map((e) => {
      return e.episodes.map((episode) => {
        return {
          ...episode,
          podcast: createdPodcasts[e._id - 1]._id,
        };
      });
    });

    flatEpisodes = [].concat(...sampleEpisodes);
    let createdEpisodes = await Episode.insertMany(flatEpisodes);

    console.log(`${createdUsers.length} users added.`.green.inverse);
    console.log(`${createdPodcasts.length} podcasts added.`.green.inverse);
    console.log(`${createdEpisodes.length} episodes added.`.green.inverse);
    process.exit();
  } catch (e) {
    console.log(`Seeder:Import ${e.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyDB = async () => {
  try {
    await Podcast.deleteMany();
    await Episode.deleteMany();
    await User.deleteMany();

    console.log(`DB is cleaned`.red.inverse);
    process.exit();
  } catch (e) {
    console.log(`Seeder:Destroy ${e.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] == '-d') {
  destroyDB();
} else {
  importDB();
}
