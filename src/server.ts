/* eslint-disable no-console */
import express, { Request, Response, NextFunction } from 'express';

import routes from './routes';

const app = express();

function logRequest(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const log = `[${request.method.toUpperCase()}] ${request.url}`;

  console.time(log);
  next();
  console.timeEnd(log);
}

app.use(express.json());
app.use(logRequest);
app.use(routes);

app.listen(3333, () => console.log('🚀 Server is Running on port:3333'));
