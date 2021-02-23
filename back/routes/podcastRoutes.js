const express = require('express');
const router = express.Router();

const protect = require('../middleware/authMiddleware');
const {
  getPodcasts,
  getPodcastById,
  addPodcast,
} = require('../controllers/podcastController');

const {
  getEpisodes,
  getEpisodeById,
} = require('../controllers/episodeController');

// @desc Fetch a podcast
// @route GET /api/podcasts/p/:id
// @access Public
router.route('/podcasts/p/:id').get(getPodcastById);

// @desc Fetch all podcasts
// @route GET /api/podcasts
// @access Public
router.route('/podcasts/').get(getPodcasts);

// @ desc Fetch all episodes
// @route GET /api/podcasts/:id
// @access Public
router.route('/podcasts/:id').get(getEpisodes);

// @desc Fetch an episode
// @route GET /api/podcasts/e/:id
// @access Public
router.route('/podcasts/e/:id').get(getEpisodeById);

// @desc Add a new podcast
// @route POST /api/podcast
// @access Private
// TODO: unauthorised users are not allowed to add new podcast
router.route('/podcast').post(addPodcast);

module.exports = router;
