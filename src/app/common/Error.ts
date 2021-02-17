export class Error {
  readonly message: string;
  readonly log_message: string

  constructor (message: string, log_message?: string) {
    this.message = message;
    this.log_message = log_message;
  }
}