const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const generateToken = require('../utils/generateToken');

// @desc    Authenticate a user and deligate a token
// @route   POST /api/user/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  let user = await User.findOne({ email });
  if (user && (await user.checkPassword(password))) {
    res.send({
      _id: user._id,
      email: user.email,
      name: user.name,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Get user profile
// @route   GET /api/user/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  let user = await User.findById(req.user._id);
  if (user) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

module.exports = { authUser, getUserProfile };
