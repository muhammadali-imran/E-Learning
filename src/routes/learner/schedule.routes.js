import { Router } from 'express';
import { ScheduleEvent } from '../../models/index.js';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.get('/course/:courseId', authMiddleware, async (req, res, next) => {
  try {
    const events = await ScheduleEvent.findAll({ where: { courseId: req.params.courseId } });
    res.json(events);
  } catch (err) { next(err); }
});

export default router;