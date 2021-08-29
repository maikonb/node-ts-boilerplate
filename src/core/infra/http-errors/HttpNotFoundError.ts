import { HttpError } from './HttpError';
import {Response} from 'express';
import { NotFoundError } from '../../errors/NotFoundError';
import { httpMapFrom } from './httpMapFrom';

@httpMapFrom(NotFoundError)
export class HttpNotFoundError extends HttpError {

  constructor(private error: NotFoundError) {
    super();
  }

  handle(res: Response): any {
    console.log('HttpNotFoundError - handle', this.error);
    if (!!this.error === true) {
      return res.status(404)
        .json({message: this.error.message, data: this.error.error});
    }
    return res.status(404)
      .json({ message: 'Resource not found.'});
  }

}