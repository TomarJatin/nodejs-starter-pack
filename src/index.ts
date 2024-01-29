// src/index.ts
import express from 'express';
import exampleRoutes from './routes/exampleRoutes';

const app = express();
const port = 3000;

app.use('/example', exampleRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
