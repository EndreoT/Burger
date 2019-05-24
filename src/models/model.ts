import { ORM, orm } from '../config/orm';
import { BurgerData } from '../types/types';

class Burger {
  orm: ORM;

  constructor() {
    this.orm = orm;
  }

  async selectAll(): Promise<BurgerData[]> {
    const result: BurgerData[] = await this.orm.selectAll("burgers");
    return result;
  }

  async selectOne(burgerId: number): Promise<BurgerData[]> {
    const result: BurgerData[] = await this.orm.selectOne('burgers', burgerId);
    return result;
  }

  async insertOne(burgerName: string, devoured: boolean): Promise<any> {
    const result: any = await this.orm.insertOne('burgers', burgerName, devoured);
    return result;
  }

  async updateOne(burgerId: number, burgerName: string, devoured: boolean): Promise<any> {
    const result: any = await this.orm.updateOne('burgers', burgerId, burgerName, devoured);
    return result;
  }

  async deleteOne(burgerId: number): Promise<any> {
    const result: any = await this.orm.deleteOne('burgers', burgerId);
    return result;
  }
}

const burger: Burger = new Burger();

export { Burger, burger };