
export class Result<T> {

  public isSuccess: boolean;
  public isFailure: boolean
  public error: string;
  private _value: T;

  public constructor (isSuccess: boolean, error?: string, value?: T) {

    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this._value = value;
    
    Object.freeze(this);
  }

  public getValue () : T {
    return this._value;
  }

  public static ok<U> (value?: U) : Result<U> {
    return new Result<U>(true, null, value);
  }

  public static fail<U> (error: string): Result<U> {
    return new Result<U>(false, error);
  }

}
