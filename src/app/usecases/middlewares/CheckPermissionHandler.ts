import { UseCase } from "../../common/UseCase";
import { UseCaseCallbackHandler, UseCaseHandler } from "../../common/UseCaseHandler";

export class CheckPermissionHandler<Request, Response> extends UseCaseHandler<Request, Response>  {

  private useCaseName: string;

  constructor(useCaseImpl: UseCase<Request, Response>, useCaseName: string) {
    super(useCaseImpl);
    this.useCaseName = useCaseName;
  }

  handle(handler: UseCaseCallbackHandler<Request, Response>, request?: Request): Response | Promise<Response> {
    console.log('CheckPermissionHandler - Handle - Usecase: ' + this.useCaseName);
    return this.next(handler, request)
  }

}
