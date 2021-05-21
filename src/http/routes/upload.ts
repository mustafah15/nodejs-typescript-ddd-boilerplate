import express, { Request, Response } from 'express';
import multer from 'multer';
import { asyncWrapper } from '../utils/asyncWrapper';

const router = express.Router();

const upload = multer({ dest: 'uploads/' });

export function uploadRoute() {
  router.post(
    '/file',
    upload.single('file'),
    asyncWrapper(async (_req: Request, res: Response) => {
      // req.file is the `avatar` file
      // req.body will hold the text fields, if there were any
      // const { file } = req;

      res.json({ message: 'ok' });
    }),
  );

  return router;
}
