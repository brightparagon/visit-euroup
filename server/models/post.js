const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
  title: String,
  type: String,
  gridType: String,
  url: String,
});

module.exports = mongoose.model('Post', postSchema);
