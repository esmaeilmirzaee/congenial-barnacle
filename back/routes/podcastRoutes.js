const express = require('express');
const router = express.Router();

const Podcast = require('../models/podcastModel');
const Episode = require('../models/episodeModel');

const asyncHandler = require('express-async-handler');

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
    const image = await Podcast.find({ _id: req.params.id }, { image: 1 });

    const episodes = await Episode.find({
      podcast: req.params.id,
    });
    if (episodes && image) {
      res.json({ e: episodes, i: image });
    } else {
      res.status(404);
      throw new Error('Podcast not found');
    }
  }),
);

module.exports = router;
