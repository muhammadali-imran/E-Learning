import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
const Discussion = sequelize.define('Discussion', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  message: { type: DataTypes.TEXT, allowNull: false },
  courseId: { type: DataTypes.INTEGER, allowNull: false },
  userId: { type: DataTypes.INTEGER, allowNull: false }
});
export default Discussion;