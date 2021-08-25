import * as express from 'express';
import { Inject } from "typescript-ioc";
import { BaseController } from '../../../../core/controllers/BaseController';
import { DeleteNameUseCase } from './DeleteNameUseCase';


export class DeleteNameController extends BaseController {
  
  @Inject
  private usecase: DeleteNameUseCase;

  protected async executeImpl(req: express.Request, res: express.Response): Promise<void | any> {
    let uuid = req.params.uuid;
    let result = await this.usecase.execute(uuid);
    if (result.isSuccess) return this.success(res, result);
    return this.badRequest(res, result);
  }

}
