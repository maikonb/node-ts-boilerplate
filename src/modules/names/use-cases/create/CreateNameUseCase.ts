import { Inject } from 'typescript-ioc';
import { ApplicationError } from '../../../../core/errors/ApplicationError';
import { ValidationError } from '../../../../core/errors/ValidationError';
import { Result } from '../../../../core/result/Result';
import { UseCase } from '../../../../core/use-cases/UseCase';
import { CheckAuthenticationHandler } from '../../../../common/middlewares/CheckAuthenticationHandler';
import { CheckPermissionHandler } from '../../../../common/middlewares/CheckPermissionHandler';
import { Name } from '../../../../domain/Name';
import { NameRepo } from '../../repos/NameRepo';
import { CreateNameDTO } from './CreateNameDTO';


type Response = 
  Result<Name> | 
  Result<ValidationError> |
  Result<ApplicationError>;
  
export class CreateNameUseCase extends UseCase<CreateNameDTO, Response> {

  @Inject
  private repo: NameRepo;

  constructor() {
    super();
    this.addHandler(CheckAuthenticationHandler);
    this.addHandler(CheckPermissionHandler, this.constructor.name);
  }

  protected async executeImpl(name: CreateNameDTO): Promise<Response> {
    let newlyName;
    try {
      newlyName = await this.repo.create(name);
    }
    catch(error) {
      return Result.error(
        ApplicationError.create(
          "An unexpected error occurred during this operation.", error)
      );
    }
    return Result.success(newlyName);
  }

}
