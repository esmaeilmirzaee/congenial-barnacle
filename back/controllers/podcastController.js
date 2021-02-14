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

module.exports = { getPodcasts, getPodcastById };
