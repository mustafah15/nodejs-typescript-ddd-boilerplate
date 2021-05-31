import { ValidationError } from 'express-validator';

import { CustomError } from './CustomError';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  message = 'Invalid Request';

  constructor(public details: ValidationError[]) {
    super('Invalid Request');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return {
      message: this.message,
      details: this.details.map((err) => {
        return { message: err.msg, field: err.param };
      }),
    };
  }
}
