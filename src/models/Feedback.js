import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
const Feedback = sequelize.define('Feedback', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rating: { type: DataTypes.INTEGER, allowNull: false },
  comments: DataTypes.TEXT,
  userId: { type: DataTypes.INTEGER, allowNull: false }
});
export default Feedback;