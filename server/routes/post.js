import express from 'express';
import Post from '../models/post';

const router = express.Router();

router.get('all', (req, res, next) => {
  Post.find().exec((error, posts) => {
    if (error) return next(error);

    return res.status(200).json({
      posts,
    });
  });
});

export default router;
