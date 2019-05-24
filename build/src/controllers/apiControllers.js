"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../models/model");
async function getAllBurgers(req, res) {
    const burgers = await model_1.burger.selectAll();
    res.json(burgers);
}
exports.getAllBurgers = getAllBurgers;
//# sourceMappingURL=apiControllers.js.map