import { Inject } from "typescript-ioc";
import { ApplicationError } from '../../common/ResponseErrors/ApplicationError';
import { ValidationError } from '../../common/ResponseErrors/ValidationError';
import { Result } from '../../common/Result/Result';
import {UseCase} from "../../common/UseCase";
import {Name} from "../../domain/Name";
import { NameRepo } from "../../repos/NameRepo";
import { CheckAuthenticationHandler } from "../middlewares/CheckAuthenticationHandler";
import { CheckPermissionHandler } from "../middlewares/CheckPermissionHandler";

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
    this.addHandler(CheckPermissionHandler, this.constructor.name); // doesn't work well with minified code
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
