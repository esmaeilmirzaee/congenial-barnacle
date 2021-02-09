const mongoose = require('mongoose');
const reviewSchema = require('./reviewSchema');

const podcastSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      require: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: false,
      default: 0,
    },
    reviews: [reviewSchema],
  },
  {
    timestamps: true,
  },
);

const Podcast = mongoose.model('Podcast', podcastSchema);
module.exports = Podcast;
