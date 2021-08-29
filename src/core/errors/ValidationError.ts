import { DomainError } from './DomainError';

export enum ValidationErrorType {
  MISSING_FIELD = 'MISSING_FIELD',
  MISMATCH_TYPE = 'MISMATCH_TYPE',
  ALREADY_EXISTS= 'ALREADY_EXISTS',
}

export interface FieldsDescriptor {
  [key: string]: ValidationErrorType
}

export class ValidationError extends DomainError {

  readonly fields: FieldsDescriptor  = {};

  private constructor(readonly message: string) {
    super();
  }

  static create(message:string) {
    return new ValidationError(message);
  }

  public field(name: string, error: ValidationErrorType) {
    this.fields[name] = error;
    return this;
  }
}

