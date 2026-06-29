import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';

const Lecture = sequelize.define('Lecture', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  content: DataTypes.TEXT,
  videoUrl: DataTypes.STRING,
  order: { type: DataTypes.INTEGER, defaultValue: 0 },
  courseId: { type: DataTypes.INTEGER, allowNull: false }
});

export default Lecture;