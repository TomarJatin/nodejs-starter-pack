// src/routes/exampleRoutes.ts
import express, { Router } from 'express';
import { getExampleData } from '../controllers/exampleController';

const router: Router = express.Router();

router.get('/', getExampleData);

export default router;
