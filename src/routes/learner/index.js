import { Router } from 'express';
import authRoutes from './auth.routes.js';
import courseRoutes from './course.routes.js';
import lectureRoutes from './lecture.routes.js';
import assignmentRoutes from './assignment.routes.js';
import quizRoutes from './quiz.routes.js';
import attendanceRoutes from './attendance.routes.js';
import scheduleRoutes from './schedule.routes.js';
import gradeRoutes from './grade.routes.js';
import profileRoutes from './profile.routes.js';
import notificationRoutes from './notification.routes.js';
import libraryRoutes from './library.routes.js';
import discussionRoutes from './discussion.routes.js';
import enrollmentRoutes from './enrollment.routes.js';
import feeRoutes from './fee.routes.js';
import paymentRoutes from './payment.routes.js';
import feedbackRoutes from './feedback.routes.js';

const router = Router();

router.use('/auth', authRoutes);
router.use('/courses', courseRoutes);
router.use('/lectures', lectureRoutes);
router.use('/assignments', assignmentRoutes);
router.use('/quizzes', quizRoutes);
router.use('/attendance', attendanceRoutes);
router.use('/schedule', scheduleRoutes);
router.use('/grades', gradeRoutes);
router.use('/profile', profileRoutes);
router.use('/notifications', notificationRoutes);
router.use('/library', libraryRoutes);
router.use('/discussions', discussionRoutes);
router.use('/enrollments', enrollmentRoutes);
router.use('/fees', feeRoutes);
router.use('/payments', paymentRoutes);
router.use('/feedback', feedbackRoutes);

export default router;