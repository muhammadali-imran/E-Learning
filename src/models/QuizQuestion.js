import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
const QuizQuestion = sequelize.define('QuizQuestion', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  questionText: { type: DataTypes.TEXT, allowNull: false },
  options: { type: DataTypes.ARRAY(DataTypes.STRING), allowNull: false },
  correctAnswer: { type: DataTypes.STRING, allowNull: false },
  quizId: { type: DataTypes.INTEGER, allowNull: false }
});
export default QuizQuestion;