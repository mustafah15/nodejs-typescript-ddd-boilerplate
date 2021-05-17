import { CustomError } from './CustomError';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;

  message = 'Error Connecting to Database';

  constructor() {
    super('Error Connecting to Database');
    Object.setPrototypeOf(this, DatabaseConnectionError);
  }

  serializeErrors() {
    return {
      message: this.message,
    };
  }
}
