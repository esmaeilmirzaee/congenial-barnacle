const express = require('express');
const router = express.Router();
const { getKeywords, addKeyword } = require('../controllers/keywordController');

router.route('/').get(getKeywords);

router.post('/', addKeyword);

module.exports = router;
