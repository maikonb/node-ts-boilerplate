export class Result<T> {

  readonly isSuccess: boolean;
  readonly isFailure: boolean;
  readonly usr_msg: string;
  readonly log_msg: string;  
  readonly data: T;

  private constructor (isSuccess: boolean, value?: T, usr_msg?: string, log_msg?: string) {
    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.usr_msg = usr_msg;
    this.log_msg = log_msg;
    this.data = value;
  }

  public static success<T> (res: T, usr_msg?: string, log_msg?: string) : Result<T> {
    return new Result<T>(true, res, usr_msg, log_msg);
  }

  public static error<T> (res: T): Result<T> {
    return new Result<T>(false, res);
  }

}
