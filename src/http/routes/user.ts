import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { asyncWrapper } from '../utils/asyncWrapper';
import { UsersService } from '../../domain/users/usersService';
import { validationRequest } from '../../utils';

const router = express.Router();

export function userRoute(userService: UsersService) {
  router.post(
    '/',
    [
      body('firstName')
        .isString()
        .notEmpty()
        .withMessage('first name is required'),
      body('lastName')
        .isString()
        .notEmpty()
        .withMessage('last name is required'),
      body('age').isNumeric().withMessage('age is required'),
    ],
    validationRequest,
    asyncWrapper(async (req: Request, res: Response) => {
      const { firstName, lastName, age } = req.body;
      const user = await userService.createUser(firstName, lastName, age);
      res.json(user);
    }),
  );

  return router;
}
