const mongoose = require('mongoose');

const posterSchema = mongoose.Schema({
  podcast: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Podcast',
  },
});
