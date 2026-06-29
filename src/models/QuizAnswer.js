import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
const QuizAnswer = sequelize.define('QuizAnswer', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  chosenOption: DataTypes.STRING,
  isCorrect: DataTypes.BOOLEAN,
  attemptId: { type: DataTypes.INTEGER, allowNull: false }
});
export default QuizAnswer;