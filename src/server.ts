import express, { Request, Response, NextFunction } from 'express';

const app = express();

function logRequest(request: Request, response: Response, next: NextFunction): void {
  const { method, url } = request;

  const log: string = `[${method.toUpperCase()}] ${url}`;

  console.time(log);

  next();

  console.timeEnd(log);
}

app.use(express.json());
app.use(logRequest);

app.get('/', (request, response) => response.send('hello baby'));

app.listen(3333, () => console.log('🚀 Server is Running on port:3333'));
