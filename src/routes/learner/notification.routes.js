import { Router } from 'express';
import { Notification } from '../../models/index.js';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.get('/', authMiddleware, async (req, res, next) => {
  try {
    const notifications = await Notification.findAll({ where: { userId: req.user.id }, order: [['createdAt', 'DESC']] });
    res.json(notifications);
  } catch (err) { next(err); }
});

export default router;