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

  async insertOne(burgerName: string, devoured: boolean): Promise<any> {
    const result = await this.orm.insertOne('burgers', burgerName, devoured);
    return result;
  }

  async updateOne(burgerId: number, burgerName: string, devoured: boolean): Promise<any> {
    const result = await this.orm.updateOne('burgers', burgerId, burgerName, devoured);
    return result;
  }

  async deleteOne(burgerId: number): Promise<any> {
    const result = await this.orm.deleteOne('burgers', burgerId);
    return result;
  }
}
