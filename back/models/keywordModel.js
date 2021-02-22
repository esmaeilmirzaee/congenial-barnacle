const mongoose = require('mongoose');

const keywordSchema = mongoose.Schema(
  {
    tag: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamp: true },
);

const Keyword = mongoose.model('Keyword', keywordSchema);
module.exports = Keyword;
