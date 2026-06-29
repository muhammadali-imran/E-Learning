import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
const LibraryResource = sequelize.define('LibraryResource', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  fileUrl: DataTypes.STRING,
  courseId: { type: DataTypes.INTEGER, allowNull: false }
});
export default LibraryResource;