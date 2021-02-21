export class ResultSuccess<T> {

  readonly usr_msg: string;
  readonly log_msg: string;
  readonly data?: T;

  constructor (usr_msg: string, data?: T) {
    this.usr_msg = usr_msg;
    this.log_msg = usr_msg;
    this.data = data;
  }
}