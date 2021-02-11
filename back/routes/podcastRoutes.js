const express = require('express');
const router = express.Router();

const Podcast = require('../models/podcastModel');

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
    const podcast = await Podcast.findById(req.params.id);
    if (podcast) {
      res.json(podcast);
    } else {
      res.status(404).json({ message: 'Podcast not found' });
    }
  }),
);

module.exports = router;
