import { Inject } from "typescript-ioc";
import { ResponseType } from "../../common/Repository/Repository";
import {UseCase} from "../../common/UseCase";
import {Name} from "../../domain/Name";
import { NameRepo } from "../../repos/NameRepo";
import { CheckAuthenticationHandler } from "../middlewares/CheckAuthenticationHandler";
import { CheckPermissionHandler } from "../middlewares/CheckPermissionHandler";


export class ListAllNames extends UseCase< any, ResponseType<Name[]>> {
  
  @Inject
  private repo: NameRepo;

  constructor() {
    super();
    this.addHandler(CheckAuthenticationHandler);
    this.addHandler(CheckPermissionHandler, this.constructor.name); // doesn't work well with minified code
  }

  protected async executeImpl(): Promise<ResponseType<Name[]>> {
    let names = await this.repo.all();
    return names;
  }

}
