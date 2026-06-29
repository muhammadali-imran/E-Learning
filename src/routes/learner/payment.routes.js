import { Router } from 'express';
import { Payment, Fee } from '../../models/index.js';
import authMiddleware from '../../middleware/auth.js';

const router = Router();

router.post('/', authMiddleware, async (req, res, next) => {
  try {
    const { amount, feeId, transactionId } = req.body;
    const payment = await Payment.create({ amount, feeId, transactionId, userId: req.user.id });
    await Fee.update({ status: 'paid' }, { where: { id: feeId } });
    res.status(201).json(payment);
  } catch (err) { next(err); }
});

export default router;