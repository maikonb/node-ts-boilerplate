import * as express from 'express';

export abstract class HttpError {
  abstract handle(res: express.Response): any;
}