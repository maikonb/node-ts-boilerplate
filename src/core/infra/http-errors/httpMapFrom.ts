import { DomainError } from '../../errors/DomainError';
import { HttpError } from './HttpError';
import { HttpErrorFactory } from './HttpErrorFactory';

// Annotation utilizado para mapear erros de dominio em erros HTTP
export function httpMapFrom(className: any) {
  return function(classConstructor: new (error: DomainError) => HttpError) {
    HttpErrorFactory.getInstance()
      .addError(className.name, classConstructor);
  }
}