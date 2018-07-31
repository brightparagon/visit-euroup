import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
  title: String,
  type: String,
  gridType: String,
  url: String,
});

export default mongoose.model('Post', postSchema);
