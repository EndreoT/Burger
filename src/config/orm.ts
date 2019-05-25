import * as mysql from 'mysql';

import { BurgerData } from '../types/types';
import { config } from './connectionConfig';


class ORM {
  connection: mysql.Connection;

  constructor(config: mysql.ConnectionConfig) {
    this.connection = mysql.createConnection(config);
  }

  selectAll(tableName: string): Promise<BurgerData[]> {
    const query = "Select * FROM ??;";

    return new Promise((resolve, reject) => {
      this.connection.query(
        query,
        [tableName],
        (err, burgers: BurgerData[]) => {
          if (err) reject(err);
          resolve(burgers);
        });
    });
  }

  selectOne(tableName: string, burgerId: number): Promise<BurgerData[]> {
    const query = "Select * FROM ?? WHERE ?;";

    return new Promise((resolve, reject) => {
      this.connection.query(
        query,
        [
          tableName,
          { "id": burgerId },
        ],
        (err, burger: BurgerData[]) => {
          if (err) reject(err);
          resolve(burger);
        });
    });
  }

  insertOne(tableName: string, burgerName: string, topping: string, devoured: boolean): Promise<any> {
    const query = "INSERT INTO ?? SET ? ;";

    return new Promise((resolve, reject) => {
      this.connection.query(
        query,
        [
          tableName,
          {
            burger_name: burgerName,
            topping,
            devoured,
          },
        ],
        (err, data) => {
          if (err) reject(err);
          resolve(data);
        });
    });
  }

  updateOne(tableName: string, burgerId: number, burgerName: string, topping: string, devoured: boolean): Promise<any> {
    const query = "UPDATE ?? SET ? WHERE ?";

    return new Promise((resolve, reject) => {
      this.connection.query(
        query,
        [
          tableName,
          {
            burger_name: burgerName,
            topping,
            devoured,
          },
          {
            id: burgerId,
          },
        ],
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        });
    });
  }

  deleteOne(tableName: string, burgerId: number): Promise<any> {
    const query = "DELETE FROM ?? WHERE ?";

    return new Promise((resolve, reject) => {
      this.connection.query(
        query,
        [
          tableName,
          {
            id: burgerId,
          },
        ],
        (err, data) => {
          if (err) {
            reject(err);
          }
          resolve(data);
        });
    });
  }

  // End connection to DB
  close(): void {
    this.connection.end((err: mysql.MysqlError) => {
      if (err) {
        console.log(err);
      }
    });
  }
}

const orm = new ORM(config);

export { ORM, orm };
