import { Inject } from "typescript-ioc";
import { ResponseType } from "../../common/Repository/Repository";
import {UseCase} from "../../common/UseCase";
import {Name} from "../../domain/Name";
import { NameRepo } from "../../repos/NameRepo";


export class ListAllNames extends UseCase< any, ResponseType<Name[]>> {
  
  @Inject
  private repo: NameRepo;

  protected async executeImpl(): Promise<ResponseType<Name[]>> {
    let names = await this.repo.all();
    return names;
  }

}
