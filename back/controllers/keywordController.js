const asyncHandler = require('express-async-handler');
const Keyword = require('../models/keywordModel');

const getKeywords = asyncHandler(async (req, res) => {
  try {
    let keywords = await Keyword.find({});
    res.json(keywords);
  } catch (e) {
    res.status(500).send('Could not load keywords');
  }
});

const addKeyword = asyncHandler(async (req, res) => {
  let { keyword } = req.body;
  let keywordExists = await Keyword.findOne({ tag: keyword });
  if (keywordExists) {
    res.status(400).send('Keyword exists');
  }
  let addedKeyword = await Keyword.create({ tag: keyword });
  if (addedKeyword) {
    res.status(201).send({
      tag: addedKeyword,
    });
  } else {
    res.status(500).send('Keyword: something wrong');
  }
});

module.exports = { getKeywords, addKeyword };
