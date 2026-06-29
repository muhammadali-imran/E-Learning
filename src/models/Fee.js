import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
const Fee = sequelize.define('Fee', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  amount: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  status: { type: DataTypes.ENUM('paid', 'unpaid', 'pending'), defaultValue: 'unpaid' },
  userId: { type: DataTypes.INTEGER, allowNull: false }
});
export default Fee;