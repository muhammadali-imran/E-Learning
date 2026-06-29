import { Router } from 'express';
import * as authController from '../../controllers/learner/auth.controller.js';
import { loginValidation, registerValidation } from '../../validators/learner/auth.validator.js';

const router = Router();

router.post('/login', loginValidation, authController.login);
router.post('/register', registerValidation, authController.register);
router.get('/me', authController.me); // requires auth middleware inside
router.post('/password-reset', authController.requestPasswordReset);
router.post('/password-reset/confirm', authController.confirmPasswordReset);

export default router;