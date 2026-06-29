import { Router } from 'express';
import * as authController from '../../controllers/learner/auth.controller.js';
import authMiddleware from '../../middleware/auth.js';
import { loginValidation, registerValidation } from '../../validators/learner/auth.validator.js';

const router = Router();

router.post('/login', loginValidation, authController.login);
router.post('/register', registerValidation, authController.register);
router.get('/me', authMiddleware, authController.me); 
router.post('/password-reset', (req, res) => res.json({ detail: "Reset email sent." }));
router.post('/password-reset/confirm', (req, res) => res.json({ detail: "Password reset successful." }));

export default router;