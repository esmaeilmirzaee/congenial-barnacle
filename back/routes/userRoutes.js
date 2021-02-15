const express = require('express');
const router = express.Router();

const {
  authUser,
  getUserProfile,
  registerUser,
} = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

// @desc authenticate and set token to a user
// @route POST /api/user/login
// @access Public
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile);
router.post('/', registerUser);

module.exports = router;
