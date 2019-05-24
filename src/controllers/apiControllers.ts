import * as express from 'express';
import { burger } from '../models/model';
import * as utils from '../utils.ts/utils';
import {BurgerData} from '../types/types';


export async function getAllBurgers(req: express.Request, res: express.Response) {
  const burgers: BurgerData[] = await burger.selectAll();
  res.json(burgers);
}

export async function getBurger(req: express.Request, res: express.Response) {
  const burgerId: number = utils.convertToInteger(req.params.burgerId);

  const burgerRes: BurgerData[] = await burger.selectOne(burgerId);
  res.json(burgerRes);
}

export async function addBurger(req: express.Request, res: express.Response) {
  const body = req.body;
  const burgerName: string = body.burgerName;
  const isDevoured: boolean = body;

  const result: any = await burger.insertOne(burgerName, isDevoured);
  res.json(result);
}

export async function updateBurger(req: express.Request, res: express.Response) {
  try {
    const body = req.body;
    const burgerId: number = utils.convertToInteger(req.params.burgerId);
    const burgerName: string = body.burgerName;
    const devoured: boolean = utils.convertToBoolean(body.devoured);

    const result: any = await burger.updateOne(burgerId, burgerName, devoured);
    res.json(result);

  } catch (err) {
    console.log(err);
  }
}

export async function deleteBurger(req: express.Request, res: express.Response) {
  const burgerId: number = utils.convertToInteger(req.params.burgerId);

  const result: any = await burger.deleteOne(burgerId);
  res.json(result);
}
