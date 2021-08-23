import * as express from 'express';

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

  protected sendResponse(res: express.Response, statusCode: number, data?: { message?: string, data?: any} ) {
    if (typeof data !== 'undefined' ) {
      return res.status(statusCode).json(data);
    }
    return res.status(statusCode);
  }

  protected success(res: express.Response, data?: any) {
    return this.sendResponse(res, 200, { data });
  }

  protected created(res: express.Response, data?: any) {
    return this.sendResponse(res, 201, { data });
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
  
} 