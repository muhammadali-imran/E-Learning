import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
const Schedule = sequelize.define('ScheduleEvent', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  startTime: DataTypes.DATE,
  endTime: DataTypes.DATE,
  courseId: { type: DataTypes.INTEGER, allowNull: false }
});
export default Schedule;