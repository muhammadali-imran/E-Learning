import { Router } from 'express';
import { Discussion } from '../../models/index.js';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.get('/course/:courseId', authMiddleware, async (req, res, next) => {
  try {
    const posts = await Discussion.findAll({ where: { courseId: req.params.courseId }, order: [['createdAt', 'ASC']] });
    res.json(posts);
  } catch (err) { next(err); }
});

router.post('/course/:courseId', authMiddleware, async (req, res, next) => {
  try {
    const post = await Discussion.create({
      message: req.body.message,
      courseId: req.params.courseId,
      userId: req.user.id
    });
    res.status(201).json(post);
  } catch (err) { next(err); }
});

export default router;