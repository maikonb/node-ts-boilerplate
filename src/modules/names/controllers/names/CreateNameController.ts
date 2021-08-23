import * as express from 'express';
import { Inject } from "typescript-ioc";
import { BaseController } from '../../../../core/controllers/BaseController';
import { ListAllNames } from '../../usecases/ListAllNames';

export class CreateNameController extends BaseController {
  
  @Inject
  private usecase: ListAllNames;

  protected async executeImpl(req: express.Request, res: express.Response): Promise<void | any> {
    if ('nameId' in req.params && req.params.nameId != undefined) {
      let uuid = req.params.uuid;
      let result = await this.usecase.execute();
      return this.success(res, result);
    }
    // fail
  }

}