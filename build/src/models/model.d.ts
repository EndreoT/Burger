import { ORM } from '../config/orm';
import { BurgerData } from '../types/types';
declare class Burger {
    orm: ORM;
    constructor();
    selectAll(): Promise<BurgerData[]>;
    selectOne(burgerId: number): Promise<BurgerData>;
    insertOne(burgerName: string, devoured: boolean): Promise<any>;
    updateOne(burgerId: number, burgerName: string, devoured: boolean): Promise<any>;
    deleteOne(burgerId: number): Promise<any>;
}
declare const burger: Burger;
export { Burger, burger };
