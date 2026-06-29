import { Router } from 'express';
import { Fee } from '../../models/index.js';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.get('/', authMiddleware, async (req, res, next) => {
  try {
    const fees = await Fee.findAll({ where: { userId: req.user.id } });
    res.json(fees);
  } catch (err) { next(err); }
});

export default router;