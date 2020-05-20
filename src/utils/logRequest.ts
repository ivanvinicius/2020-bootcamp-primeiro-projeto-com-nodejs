import { Request, Response, NextFunction } from 'express';

function logRequest(req: Request, res: Response, next: NextFunction): void {
  const { method, url } = req;

  const log = `[${method.toUpperCase()}] ${url}`;

  /* eslint-disable no-console */
  console.time(log);
  next();
  console.timeEnd(log);
}

export default logRequest;
