import { ValidationError } from '../../errors/ValidationError';
import { HttpError } from './HttpError';
import {Response} from 'express';


export class HttpValidationError extends HttpError {
  
  constructor(private error: ValidationError) {
    super();
  }

  handle(res: Response): any {
  }
}

