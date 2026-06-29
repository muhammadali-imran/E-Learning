import { User } from '../../models/index.js';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

export async function login(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ detail: errors.array()[0].msg });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ detail: 'Invalid email or password.' });
    }

    const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user.id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });

    res.json({
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
      access: accessToken,
      refresh: refreshToken,
    });
  } catch (err) {
    next(err);
  }
}

export async function register(req, res, next) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ detail: errors.array()[0].msg });
    }

    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ detail: 'A user with this email already exists.' });
    }

    const user = await User.create({ name, email, password, role: 'student' });

    const accessToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });
    const refreshToken = jwt.sign({ id: user.id }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      user: { id: user.id, name: user.name, email: user.email, role: user.role },
      access: accessToken,
      refresh: refreshToken,
    });
  } catch (err) {
    next(err);
  }
}

export async function me(req, res, next) {
  try {
    const user = req.user; // from auth middleware
    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
      bio: user.bio,
      phone: user.phone,
      address: user.address,
      dateOfBirth: user.dateOfBirth,
      education: user.education,
      cgpa: user.cgpa,
      enrolledSince: user.enrolledSince,
      skills: user.skills,
    });
  } catch (err) {
    next(err);
  }
}
