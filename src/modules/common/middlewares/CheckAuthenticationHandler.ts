import { UseCase } from '../../../core/use-cases/UseCase';
import { UseCaseCallbackHandler, UseCaseHandler } from '../../../core/use-cases/UseCaseHandler';

export class CheckAuthenticationHandler<Request, Response> extends UseCaseHandler<Request, Response>  {

  constructor(useCaseImpl: UseCase<Request, Response>) {
    super(useCaseImpl);
  }

  async handle(handler: UseCaseCallbackHandler<Request, Response>, request?: Request): Promise<Response> {
    console.log('CheckAuthenticationHandler - Handle - ANTES');
    let res = await this.next(handler, request)
    console.log(res);
    console.log('CheckAuthenticationHandler - Handle - DEPOIS');
    return res;
  }

}