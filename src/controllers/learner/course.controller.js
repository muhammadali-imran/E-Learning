import { Course, Enrollment } from '../../models/index.js';
import { paginate } from '../../utlis/pagination.js';

export async function getAllCourses(req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.pageSize) || 10;
    
    const data = await paginate(Course, { page, pageSize, order: [['createdAt', 'DESC']] });
    res.json(data);
  } catch (err) {
    next(err);
  }
}

export async function getCourseById(req, res, next) {
  try {
    const course = await Course.findByPk(req.params.id);
    if (!course) return res.status(404).json({ detail: 'Course not found.' });
    res.json(course);
  } catch (err) {
    next(err);
  }
}

export async function enrollInCourse(req, res, next) {
  try {
    const courseId = req.params.id;
    const userId = req.user.id;

    const existingEnrollment = await Enrollment.findOne({ where: { userId, courseId } });
    if (existingEnrollment) {
      return res.status(400).json({ detail: 'Already enrolled in this course.' });
    }

    const enrollment = await Enrollment.create({ userId, courseId });
    await Course.increment('studentCount', { by: 1, where: { id: courseId } });

    res.status(201).json({ detail: 'Successfully enrolled.', enrollment });
  } catch (err) {
    next(err);
  }
}