
import { Result } from "../../common/Result";
import { UseCase } from "../../common/UseCase";
import { uuidDTO } from "../../common/uuidDTO";
import { UserRepo } from "../../repos/UserRepo";
import { Inject } from "typescript-ioc";

export type DeleteUserResponse = Result<void>;

export class DeleteUser extends UseCase<uuidDTO, DeleteUserResponse> {
  
  @Inject
  private userRepo: UserRepo;

  constructor() {
    super();
  }

  public async execute(request: uuidDTO): Promise<DeleteUserResponse> {
    return null;
  }

}