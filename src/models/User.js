import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';
import bcrypt from 'bcryptjs';

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('student', 'instructor', 'admin'),
    defaultValue: 'student',
  },
  avatar: DataTypes.STRING,
  bio: DataTypes.TEXT,
  phone: DataTypes.STRING,
  address: DataTypes.STRING,
  dateOfBirth: DataTypes.DATEONLY,
  education: DataTypes.STRING,
  cgpa: DataTypes.FLOAT,
  enrolledSince: DataTypes.DATEONLY,
  skills: DataTypes.ARRAY(DataTypes.STRING),
}, {
  hooks: {
    beforeCreate: async (user) => {
      user.password = await bcrypt.hash(user.password, 10);
    },
  },
});

User.prototype.comparePassword = async function(password) {
  return bcrypt.compare(password, this.password);
};

export default User;