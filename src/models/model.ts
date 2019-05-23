import {ORM} from '../config/orm';
import * as mysql from 'mysql';
import {BurgerData} from '../types/types';

export class Burger {
  orm: ORM;

  constructor(config: mysql.ConnectionConfig) {
    this.orm = new ORM(config);
  }

  async selectAll(): Promise<BurgerData[]> {
    const result = await this.orm.selectAll("burgers");
    return result;
  }

  async insertOne(burgerName: string, devoured: boolean) {
    const result = await this.orm.insertOne('burgers', burgerName, devoured);
    return result;
  }

}
