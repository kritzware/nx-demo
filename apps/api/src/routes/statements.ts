import { someSharedLogicMethod } from '@curve/models';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const total = someSharedLogicMethod();
  res.send({ total });
});

export default router;
