import * as express from 'express';
import { burger } from '../models/model';

export async function getIndex(req: express.Request, res: express.Response) {
  const context = await burger.selectAll();
  res.render('index', { burgers: context });
}