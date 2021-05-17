import { Request, Response, NextFunction } from 'express';

import { CustomError } from '../errors/CustomError';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send(err.serializeErrors());
  } else {
    res.status(500).send({
      Error: 'Internal Server Error',
    });
  }
};
