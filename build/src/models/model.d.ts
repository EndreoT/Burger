import { ORM } from '../config/orm';
import * as mysql from 'mysql';
import { BurgerData } from '../types/types';
export declare class Burger {
    orm: ORM;
    constructor(config: mysql.ConnectionConfig);
    selectAll(): Promise<BurgerData[]>;
    insertOne(burgerName: string, devoured: boolean): Promise<any>;
}
