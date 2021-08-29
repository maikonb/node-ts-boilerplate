import * as express from 'express';
import { HttpErrorFactory } from '../infra/http-errors/HttpErrorFactory';

export abstract class BaseController {
  
  protected abstract executeImpl(req: express.Request, res: express.Response): Promise<void | any> ;

  public async execute(req: express.Request, res: express.Response): Promise<void | any>  {
    try {
      await this.executeImpl(req,res);
    }
    catch(err) {
      this.sendResponse(res, 500, {
        message: 'An unexpected error ocurred during this request. ' +
                 'Please try again or contact the support group if the problem persists.' 
      });
      console.error('[Controller]: Unexpected error: ', err);
    }
  }

  protected sendResponse(res: express.Response, statusCode: number, data?: any ) {
    if (!!data === true) {
      let resData: any = { data: data.data };
      if ('usr_msg' in data && data.usr_msg != '') 
        resData.message = data.usr_msg;
      return res.status(statusCode).json(resData);
    }
    return res.status(statusCode);
  }

  protected success(res: express.Response, data?: any) {
    return this.sendResponse(res, 200, data);
  }

  protected created(res: express.Response, data?: any) {
    return this.sendResponse(res, 201, data);    
  }
  
  protected internalError(res: express.Response, data?: any) {
    return this.sendResponse(res, 501, { data });
  }
  
  protected badRequest(res: express.Response, data?: any) {
    return this.sendResponse(res, 400, { data });
  }
  
  protected unauthorized(res: express.Response, data?: any) {
    return this.sendResponse(res, 401, { data });
  }
  
  protected forbiden(res: express.Response, data?: any) {
    return this.sendResponse(res, 403, { data });
  }
  
  protected notFound(res: express.Response, data?: any) {
    return this.sendResponse(res, 404, { data });
  }

  protected mapToHttpError(res: express.Response, data?: any) {
    let httpErr = HttpErrorFactory.getInstance().makeHttpError(data);
    return httpErr.handle(res);
  }
} 