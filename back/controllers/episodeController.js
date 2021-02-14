const asyncHandler = require('express-async-handler');

const Episode = require('../models/episodeModel');

// @desc Fetch all episodes
// @route GET /api/podcasts/p/:id
// @access Public
const getEpisodes = asyncHandler(async (req, res) => {
  const episodes = await Episode.find({ podcast: req.params.id });
  res.json(episodes);
});

// @desc Fetch an episode
// @route GET /api/podcasts/e/:id
// @access Public
const getEpisodeById = asyncHandler(async (req, res) => {
  const episode = await Episode.findById(req.params.id);
  if (episode) {
    res.json(episode);
  } else {
    res.status(401).json({ message: 'episode does not exist.' });
  }
});

module.exports = { getEpisodes, getEpisodeById };
