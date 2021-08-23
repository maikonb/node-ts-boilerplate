import { UseCase } from '../../../core/use-cases/UseCase';
import { CheckAuthenticationHandler } from '../../common/middlewares/CheckAuthenticationHandler';
import { CheckPermissionHandler } from '../../common/middlewares/CheckPermissionHandler';
import { Name } from '../domain/Name';


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
