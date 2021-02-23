import { UseCase } from "../../common/UseCase";
import { UseCaseHandler } from "../../common/UseCaseHandler";

export class CheckAuthenticationHandler<Request, Response> extends UseCaseHandler<Request, Response>  {

  constructor(useCaseImpl: UseCase<Request, Response>) {
    super(useCaseImpl);
  }

  handle(request?: Request): Response | Promise<Response> {
    return this.next(request)
  }

}