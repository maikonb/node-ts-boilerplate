import { UseCase } from "../../common/UseCase";
import { Name } from "../../domain/Name";
import { CheckAuthenticationHandler } from '../middlewares/CheckAuthenticationHandler';
import { CheckPermissionHandler } from '../middlewares/CheckPermissionHandler';

export type Response = Name;

export class CreateName extends UseCase<Name, Response> {

  constructor() {
    super();
    this.addHandler(CheckAuthenticationHandler);
    this.addHandler(CheckPermissionHandler, this.constructor.name);
  }

  protected executeImpl(name: Name): Name | Promise<Name> {
    throw new Error("Method not implemented.");
  }

}
