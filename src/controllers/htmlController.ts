import * as express from 'express';
import { burger } from '../models/model';
import {BurgerData} from '../types/types';

export async function getIndex(req: express.Request, res: express.Response) {
  const context: BurgerData[] = await burger.selectAll();
  res.render('index', { burgers: context });
}