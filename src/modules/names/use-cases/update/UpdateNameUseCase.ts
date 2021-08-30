import { Inject } from 'typescript-ioc';
import { ApplicationError } from '../../../../core/errors/ApplicationError';
import { ValidationError } from '../../../../core/errors/ValidationError';
import { Result } from '../../../../core/result/Result';
import { UseCase } from '../../../../core/use-cases/UseCase';
import { Name } from '../../../../domain/Name';
import { NameRepo } from '../../repos/NameRepo';
import { UpdateNameDTO } from './UpdateNameDTO';

type Response = 
  Result<Name> | 
  Result<ValidationError> |
  Result<ApplicationError>;

export class UpdateNameUseCase extends UseCase<UpdateNameDTO, Response>  {

  @Inject
  private repo: NameRepo;

  protected async executeImpl(name: UpdateNameDTO): Promise<Response> {
    let updatedName;
    try {
      updatedName = await this.repo.update(name);
    }
    catch(error) {
      return Result.error(
        ApplicationError.create(
          "An unexpected error occurred during this operation.", error)
      );
    }
    return Result.success(updatedName, "Updated name successfuly.");
  }  

}