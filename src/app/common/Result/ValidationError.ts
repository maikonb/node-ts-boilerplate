import { ResultError } from "./ResultError";

export interface InvalidField {
  name: string;
  error: string;
}

export class ValidationError extends ResultError {
  readonly invalid_fields: InvalidField[];

  constructor(invalid_fields: InvalidField[], usr_msg: string, log_msg?: string, ) {
    super(usr_msg, log_msg);
    this.invalid_fields = invalid_fields;
  }

}