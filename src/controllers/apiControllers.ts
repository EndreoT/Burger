import * as express from 'express';
import { burger } from '../models/model';

export async function getAllBurgers(req: express.Request, res: express.Response) {
  const burgers = await burger.selectAll();
  res.json(burgers);
}

export async function addBurger(req: express.Request, res: express.Response) {
  const body = req.body;
  const burgerName: string = body.burgerName;
  const isDevoured: boolean = body;

  const result = await burger.insertOne(burgerName, isDevoured);
  res.json(result);
}

export async function updateBurger(req: express.Request, res: express.Response) {
  function convertToBoolean(input: string): boolean {
    try {
      return JSON.parse(input);
    }
    catch (e) {
      return false;
    }
  }

  function convertToInteger(input: string): number {
    let result: number = Number(input);
    if (isNaN(result) || !Number.isInteger(result)) {
      result = -1;
    }
    return result;
  }

  try {
    const body = req.body;
    const burgerId: number = convertToInteger(req.params.burgerId);


    const burgerName: string = body.burgerName;
    const devoured: boolean = convertToBoolean(body.devoured);
    console.log(burgerId, burgerName, devoured)
    console.log(typeof burgerId, typeof burgerName, typeof devoured)

    const result = await burger.updateOne(burgerId, burgerName, devoured);
    res.json(result);

  } catch (err) {
    console.log(err)
  }

}

export async function deleteBurger(req: express.Request, res: express.Response) {
  const burgerId = req.params.burgerId;

  const result = await burger.deleteOne(burgerId);
  res.json(result);
}