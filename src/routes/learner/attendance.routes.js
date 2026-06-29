import { Router } from 'express';
import { Attendance } from '../../models/index.js';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.get('/', authMiddleware, async (req, res, next) => {
  try {
    const records = await Attendance.findAll({ where: { userId: req.user.id } });
    res.json(records);
  } catch (err) { next(err); }
});

export default router;