const express = require('express');
const router = express.Router();

const {
  getPodcasts,
  getPodcastById,
} = require('../controllers/podcastController');

const {
  getEpisodes,
  getEpisodeById,
} = require('../controllers/episodeController');

// @desc Fetch a podcast
// @route GET /api/podcasts/p/:id
// @access Public
router.route('/p/:id').get(getPodcastById);

// @desc Fetch all podcasts
// @route GET /api/podcasts
// @access Public
router.route('/').get(getPodcasts);

// @ desc Fetch all episodes
// @route GET /api/podcasts/:id
// @access Public
router.route('/:id').get(getEpisodes);

// @desc Fetch an episode
// @route GET /api/podcasts/e/:id
// @access Public
router.route('/e/:id').get(getEpisodeById);

module.exports = router;
