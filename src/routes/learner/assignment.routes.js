import { Router } from 'express';
import { Assignment, Submission } from '../../models/index.js';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.get('/course/:courseId', authMiddleware, async (req, res, next) => {
  try {
    const assignments = await Assignment.findAll({ where: { courseId: req.params.courseId } });
    res.json(assignments);
  } catch (err) { next(err); }
});

router.post('/:id/submit', authMiddleware, async (req, res, next) => {
  try {
    const submission = await Submission.create({
      fileUrl: req.body.fileUrl,
      assignmentId: req.params.id,
      userId: req.user.id
    });
    res.status(201).json(submission);
  } catch (err) { next(err); }
});

export default router;