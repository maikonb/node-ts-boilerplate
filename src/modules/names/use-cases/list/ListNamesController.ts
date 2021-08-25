import * as express from 'express';
import { Inject } from "typescript-ioc";
import { BaseController } from '../../../../core/controllers/BaseController';
import { ListNamesUseCase } from './ListNamesUseCase';

export class ListNamesController extends BaseController {
  
  @Inject
  private usecase: ListNamesUseCase;

  protected async executeImpl(req: express.Request, res: express.Response): Promise<void | any> {
    let result = await this.usecase.execute();
    return this.success(res, result);
  }

}
