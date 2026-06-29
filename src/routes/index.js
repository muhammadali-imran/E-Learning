import { Router } from 'express';
import learnerRoutes from './learner/index.js';
import studioRoutes from './studio/index.js';
import adminRoutes from './admin/index.js';

const router = Router();

router.use('/learner', learnerRoutes);
router.use('/studio', studioRoutes);   // placeholder
router.use('/admin', adminRoutes);     // placeholder

export default router;