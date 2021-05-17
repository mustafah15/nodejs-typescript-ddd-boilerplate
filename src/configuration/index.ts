import dotenv from 'dotenv';

dotenv.config();

/**
 * This module is used to collect all the configuration variables,
 * like the environment vars, in one place so they are not scattered all over the whole codebase
 */
export const config = {
  connectionString:
    process.env.DATABASE_CONNECTION_STRING ||
    'mongodb://127.0.0.1:27017/template',
  port: process.env.PORT || 3000,
};
