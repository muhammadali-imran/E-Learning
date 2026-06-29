import User from './User.js';
import Course from './Course.js';
import Enrollment from './Enrollment.js';
import Lecture from './Lecture.js';
import Assignment from './Assignment.js';
import Submission from './Submission.js';
import Quiz from './Quiz.js';
import QuizQuestion from './QuizQuestion.js';
import QuizAttempt from './QuizAttempt.js';
import QuizAnswer from './QuizAnswer.js';
import Attendance from './Attendance.js';
import ScheduleEvent from './ScheduleEvent.js';
import Grade from './Grade.js';
import Notification from './Notification.js';
import LibraryResource from './LibraryResource.js';
import Discussion from './Discussion.js';
import Fee from './Fee.js';
import Payment from './Payment.js';
import Feedback from './Feedback.js';

// Associations
User.hasMany(Enrollment, { foreignKey: 'userId' });
Course.hasMany(Enrollment, { foreignKey: 'courseId' });
Enrollment.belongsTo(User, { foreignKey: 'userId' });
Enrollment.belongsTo(Course, { foreignKey: 'courseId' });

Course.hasMany(Lecture, { foreignKey: 'courseId' });
Lecture.belongsTo(Course, { foreignKey: 'courseId' });

Course.hasMany(Assignment, { foreignKey: 'courseId' });
Assignment.belongsTo(Course, { foreignKey: 'courseId' });
Assignment.hasMany(Submission, { foreignKey: 'assignmentId' });
Submission.belongsTo(Assignment, { foreignKey: 'assignmentId' });
Submission.belongsTo(User, { foreignKey: 'userId' });

Course.hasMany(Quiz, { foreignKey: 'courseId' });
Quiz.belongsTo(Course, { foreignKey: 'courseId' });
Quiz.hasMany(QuizQuestion, { foreignKey: 'quizId' });
QuizQuestion.belongsTo(Quiz, { foreignKey: 'quizId' });
Quiz.hasMany(QuizAttempt, { foreignKey: 'quizId' });
QuizAttempt.belongsTo(Quiz, { foreignKey: 'quizId' });
QuizAttempt.belongsTo(User, { foreignKey: 'userId' });
QuizAttempt.hasMany(QuizAnswer, { foreignKey: 'attemptId' });
QuizAnswer.belongsTo(QuizAttempt, { foreignKey: 'attemptId' });

User.hasMany(Attendance, { foreignKey: 'userId' });
Course.hasMany(Attendance, { foreignKey: 'courseId' });
Attendance.belongsTo(User, { foreignKey: 'userId' });
Attendance.belongsTo(Course, { foreignKey: 'courseId' });

Course.hasMany(ScheduleEvent, { foreignKey: 'courseId' });
ScheduleEvent.belongsTo(Course, { foreignKey: 'courseId' });

User.hasMany(Grade, { foreignKey: 'userId' });
Course.hasMany(Grade, { foreignKey: 'courseId' });
Grade.belongsTo(User, { foreignKey: 'userId' });
Grade.belongsTo(Course, { foreignKey: 'courseId' });

User.hasMany(Notification, { foreignKey: 'userId' });
Notification.belongsTo(User, { foreignKey: 'userId' });

Course.hasMany(LibraryResource, { foreignKey: 'courseId' });
LibraryResource.belongsTo(Course, { foreignKey: 'courseId' });

Course.hasMany(Discussion, { foreignKey: 'courseId' });
Discussion.belongsTo(Course, { foreignKey: 'courseId' });
Discussion.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Fee, { foreignKey: 'userId' });
Fee.belongsTo(User, { foreignKey: 'userId' });
Fee.hasMany(Payment, { foreignKey: 'feeId' });
Payment.belongsTo(Fee, { foreignKey: 'feeId' });
Payment.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Feedback, { foreignKey: 'userId' });
Feedback.belongsTo(User, { foreignKey: 'userId' });

export {
  User,
  Course,
  Enrollment,
  Lecture,
  Assignment,
  Submission,
  Quiz,
  QuizQuestion,
  QuizAttempt,
  QuizAnswer,
  Attendance,
  ScheduleEvent,
  Grade,
  Notification,
  LibraryResource,
  Discussion,
  Fee,
  Payment,
  Feedback,
};