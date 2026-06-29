import { Router } from 'express';
import { Enrollment, Course } from '../../models/index.js';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.get('/my-enrollments', authMiddleware, async (req, res, next) => {
  try {
    const enrollments = await Enrollment.findAll({
      where: { userId: req.user.id },
      include: [Course]
    });
    res.json(enrollments);
  } catch (err) { next(err); }
});

export default router;