import { Router } from 'express';
import { Lecture } from '../../models/index.js';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.get('/course/:courseId', authMiddleware, async (req, res, next) => {
  try {
    const lectures = await Lecture.findAll({ where: { courseId: req.params.courseId }, order: [['order', 'ASC']] });
    res.json(lectures);
  } catch (err) { next(err); }
});

export default router;