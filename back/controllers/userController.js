const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

const authUser = asyncHandler(async (req, res) => {
  let { email, password } = req.body;
  let user = await User.findOne({ email });
  if (user && (await user.checkPassword(password))) {
    res.send({
      _id: user._id,
      email: user.email,
      name: user.name,
      token: null,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

module.exports = { authUser };
