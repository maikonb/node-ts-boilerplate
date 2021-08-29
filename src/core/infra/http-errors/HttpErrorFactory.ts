import { NotFoundError } from '../../errors/NotFoundError';
import { HttpApplicationError } from './HttpApplicationError';
import { HttpError } from './HttpError';

export class HttpErrorFactory {

  private map: { [className: string]: any } = {};
  private static instance: HttpErrorFactory = null;

  private constructor() {}

  addError(className: string, classConstructor: new (error: NotFoundError) => HttpError) {
    this.map[className] = classConstructor;
  }

  static getInstance(): HttpErrorFactory {
    if (this.instance === null)
      this.instance = new HttpErrorFactory();
    return this.instance;
  }

  makeHttpError(data: any): HttpError {
    let className = (data!=null && typeof data === 'object') ? data.constructor.name : '';
    if (className in this.map) {
      let obj = new (this.map[className])(data);
      return obj;
    }
    return new HttpApplicationError(data);
  }
}