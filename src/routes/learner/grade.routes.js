import { Router } from 'express';
import { Grade } from '../../models/index.js';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.get('/', authMiddleware, async (req, res, next) => {
  try {
    const grades = await Grade.findAll({ where: { userId: req.user.id } });
    res.json(grades);
  } catch (err) { next(err); }
});

export default router;