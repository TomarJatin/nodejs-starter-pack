// src/services/exampleService.ts
import { ExampleModel } from '../models/exampleModel';

export class ExampleService {
  static getExampleData(): ExampleModel {
    return { message: 'Hello, this is your API!' };
  }
}
