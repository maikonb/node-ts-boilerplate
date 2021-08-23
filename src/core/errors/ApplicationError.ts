export class ApplicationError {

  private constructor(readonly message: string, readonly error: any) {}

  static create(message:string, error: any){
    return new ApplicationError(message, error);
  }
}