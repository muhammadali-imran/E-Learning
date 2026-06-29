import { Router } from 'express';

const router = Router();

// Future: Admin routes for user management, system settings, analytics.
router.get('/', (req, res) => {
  res.json({ message: 'Admin API placeholder' });
});

export default router;