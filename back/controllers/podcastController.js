const asyncHandler = require('express-async-handler');

const Podcast = require('../models/podcastModel');

// @desc fetch all podcasts
// @route GET /api/podcasts
// @access Public
const getPodcasts = asyncHandler(async (req, res) => {
  try {
    const podcasts = await Podcast.find({});
    res.json(podcasts);
  } catch (e) {
    res.status(401).json({ message: 'There is something wrong' });
  }
});

// @desc fetch a podcast by id
// @route GET /api/podcasts/:id
// @access Public
const getPodcastById = asyncHandler(async (req, res) => {
  const podcast = await Podcast.findById(req.params.id);
  res.json(podcast);
});

// @desc Create a new podcast
// @route POST /api/podcast
// @access Private
const addPodcast = asyncHandler(async (req, res) => {
  const { name, brand, description, selectedTags, user } = req.body;

  console.log(name, brand, description, selectedTags, user);
  res.status(201).send('OK');
});

module.exports = { getPodcasts, getPodcastById, addPodcast };

// export MANPAGER ="sh -c 'col -bx | bat -l man -p'"
