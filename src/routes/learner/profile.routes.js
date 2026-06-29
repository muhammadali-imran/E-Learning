import { Router } from 'express';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.put('/update', authMiddleware, async (req, res, next) => {
  try {
    await req.user.update(req.body);
    res.json({ message: 'Profile updated successfully', user: req.user });
  } catch (err) { next(err); }
});

export default router;