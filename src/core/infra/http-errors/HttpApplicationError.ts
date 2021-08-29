import { HttpError } from './HttpError';
import {Response} from 'express';
import { ApplicationError } from '../../errors/ApplicationError';

export class HttpApplicationError extends HttpError {
  
  constructor(private error: ApplicationError) {
    super();
  }

  handle(res: Response): any {
    if (!!this.error === true) {
      return res.status(500)
        .json({ message: this.error.message, data: this.error.error });
    }
    return res.status(500).json({
      message: 'An unexpected error ocurred during this request. ' +
      'Please try again or contact the support group if the problem persists.' 
    });
  }
}


