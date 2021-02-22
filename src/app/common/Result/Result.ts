import { ResultError } from "./ResultError";
import { ResultSuccess } from "./ResultSuccess";

type ResultType = ResultError | ResultSuccess<any>;

export class Result<T extends ResultType> {

  readonly isSuccess: boolean;
  readonly isFailure: boolean
  readonly data: T;

  private constructor (isSuccess: boolean, value?: T) {
    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.data = value;
  }

  public static success<T extends ResultSuccess<any>> (res: T) : Result<T> {
    return new Result<T>(true, res);
  }

  public static error<T extends ResultError> (res: T): Result<T> {
    return new Result<T>(false, res);
  }

}
