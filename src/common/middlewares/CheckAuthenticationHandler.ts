import { ApplicationError } from '../../core/errors/ApplicationError';
import { Result } from '../../core/result/Result';
import { UseCase } from '../../core/use-cases/UseCase';
import { UseCaseCallbackHandler, UseCaseHandler } from '../../core/use-cases/UseCaseHandler';

type ErrorResponse = Result<ApplicationError>;

export class CheckAuthenticationHandler<Request, Response> extends UseCaseHandler<Request, Response | ErrorResponse>  {

  constructor(useCaseImpl: UseCase<Request, Response>) {
    super(useCaseImpl);
  }

  async handle(handler: UseCaseCallbackHandler<Request, Response>, request?: Request): Promise<Response | ErrorResponse> {
    console.log('CheckAuthenticationHandler - Handle - Before');
    // return Result.error(
    //   ApplicationError.create("Unexpected error", {}),
    //   "An unexpected error occurred during this operation."
    // );
    let res = await this.next(handler, request)
    console.log(res);
    console.log('CheckAuthenticationHandler - Handle - After');
    return res;
  }

}