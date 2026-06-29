import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
const Submission = sequelize.define('Submission', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  fileUrl: DataTypes.STRING,
  grade: DataTypes.STRING,
  assignmentId: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false }
});
export default Submission;