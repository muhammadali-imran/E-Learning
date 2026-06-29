import dotenv from 'dotenv';
dotenv.config();

import app from './src/app.js';
import { sequelize } from './src/config/db.js';

const PORT = process.env.PORT || 8000;

try {
  await sequelize.authenticate();
  console.log('Database connected.');

  await sequelize.sync({ alter: true });

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
} catch (error) {
  console.error('Unable to connect to the database:', error);
}