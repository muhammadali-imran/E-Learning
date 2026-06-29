import { Router } from 'express';
import { Quiz, QuizAttempt } from '../../models/index.js';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.get('/course/:courseId', authMiddleware, async (req, res, next) => {
  try {
    const quizzes = await Quiz.findAll({ where: { courseId: req.params.courseId } });
    res.json(quizzes);
  } catch (err) { next(err); }
});

router.post('/:id/attempt', authMiddleware, async (req, res, next) => {
  try {
    const attempt = await QuizAttempt.create({
      quizId: req.params.id,
      userId: req.user.id,
      score: req.body.score || 0
    });
    res.status(201).json(attempt);
  } catch (err) { next(err); }
});

export default router;