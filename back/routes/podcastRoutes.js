const express = require('express');
const router = express.Router();

const Podcast = require('../models/podcastModel');
const Episode = require('../models/episodeModel');

const asyncHandler = require('express-async-handler');

// @desc Fetch a podcast
// @route GET /api/p/:id
// @access Public
router.get(
  '/p/:id',
  asyncHandler(async (req, res) => {
    const podcast = await Podcast.findById(req.params.id);
    res.json(podcast);
  }),
);

// @desc Fetch all podcasts
// @route GET /api/podcasts
// @access Public
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const podcasts = await Podcast.find({});
    res.json(podcasts);
  }),
);

// @ desc Fetch single podcast
// @route GET /api/podcasts/:id
// @access Public
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const episodes = await Episode.find({
      podcast: req.params.id,
    });
    if (episodes) {
      res.json(episodes);
    } else {
      res.status(404);
      throw new Error('Podcast not found');
    }
  }),
);

module.exports = router;
