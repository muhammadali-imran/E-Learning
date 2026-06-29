import { Router } from 'express';
import { Feedback } from '../../models/index.js';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.post('/', authMiddleware, async (req, res, next) => {
  try {
    const feedback = await Feedback.create({
      rating: req.body.rating,
      comments: req.body.comments,
      userId: req.user.id
    });
    res.status(201).json(feedback);
  } catch (err) { next(err); }
});

export default router;