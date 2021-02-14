const express = require('express');
const router = express.Router();

const { authUser } = require('../controllers/userController');

// @desc authenticate and set token to a user
// @route POST /api/user/login
// @access Public
router.post('/login', authUser);

module.exports = router;
