import { Router } from 'express';
import { LibraryResource } from '../../models/index.js';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.get('/course/:courseId', authMiddleware, async (req, res, next) => {
  try {
    const resources = await LibraryResource.findAll({ where: { courseId: req.params.courseId } });
    res.json(resources);
  } catch (err) { next(err); }
});

export default router;