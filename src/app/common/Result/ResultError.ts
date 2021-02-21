export class ResultError {
  readonly usr_msg: string;
  readonly log_msg: string;

  constructor (usr_msg: string, log_msg?: string) {
    this.usr_msg = usr_msg;
    this.log_msg = (log_msg) ? log_msg : usr_msg;
  }
}