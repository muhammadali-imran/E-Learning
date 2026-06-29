import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';

export default async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ detail: 'Authentication required.' });
    }
    const token = authHeader.replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findByPk(decoded.id);
    if (!user) {
      return res.status(401).json({ detail: 'Invalid token.' });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ detail: 'Authentication required.' });
  }
};