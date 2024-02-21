import { Statement } from '@curve/models';
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const statement = new Statement();
  const total = statement.someSharedLogicMethod();
  res.send({ total });
});

export default router;
