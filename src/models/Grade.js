import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
const Grade = sequelize.define('Grade', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  score: DataTypes.STRING,
  type: DataTypes.ENUM('assignment', 'quiz', 'exam', 'final'),
  userId: { type: DataTypes.INTEGER, allowNull: false },
  courseId: { type: DataTypes.INTEGER, allowNull: false }
});
export default Grade;