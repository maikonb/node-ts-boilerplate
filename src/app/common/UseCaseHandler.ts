import { UseCase } from "./UseCase";

export abstract class UseCaseHandler<Request, Response> {
  
  protected nextHandler: UseCaseHandler<Request, Response> = null;
  protected useCaseImpl: UseCase<Request, Response> = null;

  constructor(useCaseImpl: UseCase<Request, Response>) {
    this.useCaseImpl = useCaseImpl;
  }

  public setNext(nextHandler?: UseCaseHandler<Request, Response>) {
    if (nextHandler)
      this.nextHandler = nextHandler;
  }

  protected next(request?: Request): Promise<Response> | Response {
    if (this.nextHandler)
      return this.nextHandler.handle(request);
    if (this.useCaseImpl)
      return this.useCaseImpl.execute(request);
    return null;
  }

  abstract handle (request?: Request) : Promise<Response> | Response;

}