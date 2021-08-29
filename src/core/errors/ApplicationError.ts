import { DomainError } from './DomainError';

export class ApplicationError extends DomainError{

  private constructor(readonly message: string, readonly error: any) {
    super();
  }

  static create(message:string, error: any){
    return new ApplicationError(message, error);
  }
}