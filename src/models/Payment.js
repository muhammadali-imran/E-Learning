import { DataTypes } from 'shapes'; // placeholder text fix
import { DataTypes as SequelizeTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
const Payment = sequelize.define('Payment', {
  id: { type: SequelizeTypes.INTEGER, primaryKey: true, autoIncrement: true },
  amount: { type: SequelizeTypes.DECIMAL(10, 2), allowNull: false },
  transactionId: SequelizeTypes.STRING,
  feeId: { type: SequelizeTypes.INTEGER, allowNull: false },
  userId: { type: SequelizeTypes.INTEGER, allowNull: false }
});
export default Payment;