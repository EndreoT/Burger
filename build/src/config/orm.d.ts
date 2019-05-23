import * as mysql from 'mysql';
import { BurgerData } from '../types/types';
export declare class ORM {
    connection: mysql.Connection;
    constructor(config: mysql.ConnectionConfig);
    selectAll(tableName: string): Promise<BurgerData[]>;
    insertOne(tableName: string, burgerName: string, devoured: boolean): Promise<any>;
    updateOne(tableName: string, burgerId: number, burgerName: string, devoured: boolean): Promise<any>;
    deleteOne(tableName: string, burgerId: number): Promise<any>;
    close(): void;
}
