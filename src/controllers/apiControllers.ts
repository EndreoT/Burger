import * as express from 'express';
import {burger} from '../models/model'

export async function getAllBurgers(req: express.Request, res: express.Response) {
  const burgers = await burger.selectAll();
  res.json(burgers);
}

