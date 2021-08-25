import * as express from 'express';
import { Inject } from "typescript-ioc";
import { BaseController } from '../../../../core/controllers/BaseController';
import { CreateNameDTO } from './CreateNameDTO';
import { CreateNameUseCase } from './CreateNameUseCase';

export class CreateNameController extends BaseController {
  
  @Inject
  private usecase: CreateNameUseCase;

  protected async executeImpl(req: express.Request, res: express.Response): Promise<void | any> {
    let name: CreateNameDTO = req.body;
    let createdName = await this.usecase.execute(name);
    return this.success(res, createdName);
  }

}