export abstract class UseCase<Request, Response> {
  
  private chainOfHandlers: UseCase<Request, Request>[] = [];

  execute (request?: Request) : Promise<Response> | Response {
    return this.executeImpl(request);
  }

  protected abstract executeImpl (request?: Request) : Promise<Response> | Response;


}