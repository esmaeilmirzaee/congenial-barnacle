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
      avatar: user.avatar,
      email: user.email,
      name: user.name,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).send({ message: 'Invalid email or password' });
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
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404).send({ message: 'User not found' });
  }
});

// @desc    Register a new user
// @route   POST /api/user
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  let { name, email, password } = req.body;
  let userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400).send('Please login');
  }

  let user = await User.create({ email, name, password });
  if (user) {
    res.status(201).json({
      _id: user._id,
      avatar: user.avatar,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400).send({ message: 'Invalid data provided.' });
  }
});

module.exports = { authUser, getUserProfile, registerUser };
