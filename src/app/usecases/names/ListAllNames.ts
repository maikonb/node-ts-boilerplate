import { Inject } from "typescript-ioc";
import { ResponseType } from "../../common/Repository/Repository";
import {UseCase} from "../../common/UseCase";
import {Name} from "../../domain/Name";
import { NameRepo } from "../../repos/NameRepo";


export class ListAllNames extends UseCase<Request, ResponseType<Name[]>> {
  
  @Inject
  private repo: NameRepo;

  async execute(request?: Request): Promise<ResponseType<Name[]>> {
    let names = await this.repo.all();
    return names;
  }

}
