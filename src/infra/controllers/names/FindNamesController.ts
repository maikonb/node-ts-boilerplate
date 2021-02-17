import { BaseController } from "../BaseController";
import * as express from 'express';
import { ListAllNames } from "../../../app/usecases/names/ListAllNames";
import { Inject } from "typescript-ioc";

export class FindNamesController extends BaseController {
  
  @Inject
  private usecase: ListAllNames;

  protected async executeImpl(req: express.Request, res: express.Response): Promise<void | any> {
    let result = await this.usecase.execute();
    return this.success(res, result);
  }

}