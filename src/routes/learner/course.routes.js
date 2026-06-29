import { Router } from 'express';
import { getAllCourses, getCourseById, enrollInCourse } from '../../controllers/learner/course.controller.js';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.get('/', getAllCourses);
router.get('/:id', getCourseById);
router.post('/:id/enroll', authMiddleware, enrollInCourse);

export default router;