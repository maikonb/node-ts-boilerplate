import * as express from 'express';

export abstract class BaseController {
  
  protected abstract async executeImpl(req: express.Request, res: express.Response): Promise<void | any> ;

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
} 