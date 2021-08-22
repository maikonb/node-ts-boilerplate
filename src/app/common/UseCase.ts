import { HandlerChild, UseCaseHandler } from "./UseCaseHandler";

export abstract class UseCase<Request, Response> {
  
  protected chainedHandlers: UseCaseHandler<Request, Response> = null;

  constructor() {
  }

  execute (request?: Request) : Promise<Response> | Response {
    if (this.chainedHandlers != null)
      return this.chainedHandlers.handle( 
        (request) => this.executeImpl(request), request
      );
    return this.executeImpl(request);
  }

  protected abstract executeImpl (request?: Request) : Promise<Response> | Response;

  protected addHandler< T extends UseCaseHandler<Request, Response> >(
    ClassName: HandlerChild<Request, Response,T>, 
    ...args: any[]
  ) {
    let handler = new ClassName(this, args);
    if  (this.chainedHandlers === null)
      this.chainedHandlers = handler;
    else 
      this.chainedHandlers.setLastOfTheChain(handler);
  }

}