import { DomainError } from './DomainError';

export class NotFoundError extends DomainError {

  private constructor(readonly message: string, readonly error: any) {
    super();
  }

  static create(message:string, error: any = undefined){
    return new NotFoundError(message, error);
  }
}