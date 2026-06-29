import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Course = sequelize.define('Course', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  instructorId: { type: DataTypes.INTEGER, allowNull: false },
  description: DataTypes.TEXT,
  duration: DataTypes.STRING,
  status: { type: DataTypes.ENUM('active', 'completed', 'upcoming'), defaultValue: 'active' },
  studentCount: { type: DataTypes.INTEGER, defaultValue: 0 },
  thumbnail: DataTypes.STRING,
});

export default Course;