import { UseCase } from "../../common/UseCase";
import { UseCaseHandler } from "../../common/UseCaseHandler";

export class CheckAuthenticationHandler<Request, Response> extends UseCaseHandler<Request, Response>  {

  constructor(useCaseImpl: UseCase<Request, Response>) {
    super(useCaseImpl);
  }

  handle(request?: Request): Response | Promise<Response> {
    console.log('CheckAuthenticationHandler - Handle');
    return this.next(request)
  }

}