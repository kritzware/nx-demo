import express from 'express';
import statementsRoutes from './routes/statements';

const app = express();

app.use('/statements', statementsRoutes);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
