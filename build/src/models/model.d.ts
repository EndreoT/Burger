import { ORM } from '../config/orm';
import * as mysql from 'mysql';
import { BurgerData } from '../types/types';
export declare class Burger {
    orm: ORM;
    constructor(config: mysql.ConnectionConfig);
    selectAll(): Promise<BurgerData[]>;
    insertOne(burgerName: string, devoured: boolean): Promise<any>;
    updateOne(burgerId: number, burgerName: string, devoured: boolean): Promise<any>;
    deleteOne(burgerId: number): Promise<any>;
}
