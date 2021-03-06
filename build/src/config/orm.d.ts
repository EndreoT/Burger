import * as mysql from 'mysql';
import { BurgerData } from '../types/types';
declare class ORM {
    connection: mysql.Connection;
    constructor(config: mysql.ConnectionConfig);
    selectAll(tableName: string): Promise<BurgerData[]>;
    selectOne(tableName: string, burgerId: number): Promise<BurgerData[]>;
    insertOne(tableName: string, burgerName: string, topping: string, devoured: boolean): Promise<any>;
    updateOne(tableName: string, burgerId: number, burgerName: string, topping: string, devoured: boolean): Promise<any>;
    deleteOne(tableName: string, burgerId: number): Promise<any>;
    close(): void;
}
declare const orm: ORM;
export { ORM, orm };
