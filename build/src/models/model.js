"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orm_1 = require("../config/orm");
class Burger {
    constructor() {
        this.orm = orm_1.orm;
    }
    async selectAll() {
        const result = await this.orm.selectAll("burgers");
        return result;
    }
    async selectOne(burgerId) {
        const result = await this.orm.selectOne('burgers', burgerId);
        return result;
    }
    async insertOne(burgerName, topping, devoured) {
        const result = await this.orm.insertOne('burgers', burgerName, topping, devoured);
        return result;
    }
    async updateOne(burgerId, burgerName, topping, devoured) {
        const result = await this.orm.updateOne('burgers', burgerId, burgerName, topping, devoured);
        return result;
    }
    async deleteOne(burgerId) {
        const result = await this.orm.deleteOne('burgers', burgerId);
        return result;
    }
}
exports.Burger = Burger;
const burger = new Burger();
exports.burger = burger;
//# sourceMappingURL=model.js.map