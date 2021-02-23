export abstract class UseCase<Request, Response> {
  
  protected chainedHandlers: UseCase<Request, Request> = null;

  constructor() {

  }

  execute (request?: Request) : Promise<Response> | Response {
    return this.executeImpl(request);
  }

  protected abstract executeImpl (request?: Request) : Promise<Response> | Response;


}