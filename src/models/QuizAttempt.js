import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
const QuizAttempt = sequelize.define('QuizAttempt', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  score: DataTypes.FLOAT,
  quizId: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false }
});
export default QuizAttempt;