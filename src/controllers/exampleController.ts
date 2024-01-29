// src/controllers/exampleController.ts
import { Request, Response } from 'express';
import { ExampleService } from '../services/exampleService';

export const getExampleData = (req: Request, res: Response) => {
  const data = ExampleService.getExampleData();
  res.json(data);
};
