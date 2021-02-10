const mongoose = require('mongoose');
const reviewSchema = require('./reviewSchema');

const episodeSchema = mongoose.Schema(
  {
    podcast: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Podcast',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    audio: {
      type: String,
      required: true,
    },
    numDownloads: {
      type: Number,
      required: true,
      default: 0,
    },
    numListeners: {
      type: Number,
      required: true,
      default: 0,
    },
    duration: {
      type: String,
      required: true,
    },
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    reviews: [reviewSchema],
  },
  { timestamps: true },
);

const Episode = mongoose.model('Episode', episodeSchema);
module.exports = Episode;
