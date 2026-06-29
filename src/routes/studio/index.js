import { Router } from 'express';

const router = Router();

// Future: Instructor routes for course management, content upload, etc.
router.get('/', (req, res) => {
  res.json({ message: 'Studio API placeholder' });
});

export default router;