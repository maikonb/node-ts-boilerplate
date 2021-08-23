import { Inject } from "typescript-ioc";
import { ApplicationError } from '../../../core/errors/ApplicationError';
import { ValidationError } from '../../../core/errors/ValidationError';
import { Result } from '../../../core/result/Result';
import { UseCase } from '../../../core/use-cases/UseCase';
import { CheckAuthenticationHandler } from '../../common/middlewares/CheckAuthenticationHandler';
import { CheckPermissionHandler } from '../../common/middlewares/CheckPermissionHandler';
import { Name } from '../domain/Name';
import { NameRepo } from '../repos/NameRepo';

type Response = 
  Result<Name[]> | 
  Result<ValidationError> |
  Result<ApplicationError>;

export class ListAllNames extends UseCase< any, Response> {
  
  @Inject
  private repo: NameRepo;

  constructor() {
    super();
    this.addHandler(CheckAuthenticationHandler);
    this.addHandler(CheckPermissionHandler, this.constructor.name); 
  }

  protected async executeImpl(): Promise< Response > {
    let names;
    try {
      names = await this.repo.all();
    }
    catch(error) {
      return Result.error(
        ApplicationError.create(error.message, error),
        "An unexpected error occurred during this operation."
      );
    }
    let res = Result.success(names);
    return res;
  }

}
