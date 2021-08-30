import { Request, Response } from 'express';
import { Inject } from 'typescript-ioc';
import { BaseController } from '../../../../core/controllers/BaseController';
import { UpdateNameDTO } from './UpdateNameDTO';
import { UpdateNameUseCase } from './UpdateNameUseCase';

export class UpdateNameController extends BaseController {

  @Inject
  private usecase: UpdateNameUseCase;

  protected async executeImpl(req: Request, res: Response): Promise<void | any> {
    let uuid = req.params.uuid;
    let name: UpdateNameDTO = {...req.body, uuid};
    let result = await this.usecase.execute(name);
    if (result.isSuccess) return this.success(res, result);
    return this.mapToHttpError(res, result.data);    
  }
}