import { UseCase } from "./UseCase";

export type UseCaseCallbackHandler<Request, Response> = (request: Request) => Promise<Response> | Response;

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

  protected next(handler: UseCaseCallbackHandler<Request, Response>, request?: Request): Promise<Response> | Response {
    if (this.nextHandler)
      return this.nextHandler.handle(handler, request);
    return handler(request);
  }

  public setLastOfTheChain(nextHandler: UseCaseHandler<Request, Response>) {
    if (this.nextHandler === null)
      this.setNext(nextHandler);
    else
      this.nextHandler.setLastOfTheChain(nextHandler);
  }

  abstract handle (handler: UseCaseCallbackHandler<Request, Response>, request?: Request) : Promise<Response> | Response;

}

export interface HandlerChild<Request, Response, T extends UseCaseHandler<Request, Response>> {
  new(...args: any[]): T;
}