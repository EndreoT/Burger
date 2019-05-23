"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orm_1 = require("../config/orm");
class Burger {
    constructor(config) {
        this.orm = new orm_1.ORM(config);
    }
    async selectAll() {
        const result = await this.orm.selectAll("burgers");
        return result;
    }
    async insertOne(burgerName, devoured) {
        const result = await this.orm.insertOne('burgers', burgerName, devoured);
        return result;
    }
}
exports.Burger = Burger;
//# sourceMappingURL=model.js.map