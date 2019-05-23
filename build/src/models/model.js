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
    async updateOne(burgerId, burgerName, devoured) {
        const result = await this.orm.updateOne('burgers', burgerId, burgerName, devoured);
        return result;
    }
    async deleteOne(burgerId) {
        const result = await this.orm.deleteOne('burgers', burgerId);
        return result;
    }
}
exports.Burger = Burger;
//# sourceMappingURL=model.js.map