"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../models/model");
const utils = require("../utils.ts/utils");
async function getAllBurgers(req, res) {
    const burgers = await model_1.burger.selectAll();
    res.json(burgers);
}
exports.getAllBurgers = getAllBurgers;
async function getBurger(req, res) {
    const burgerId = utils.convertToInteger(req.params.burgerId);
    const burgerRes = await model_1.burger.selectOne(burgerId);
    res.json(burgerRes);
}
exports.getBurger = getBurger;
async function addBurger(req, res) {
    const body = req.body;
    const burgerName = body.burgerName;
    const isDevoured = body;
    const result = await model_1.burger.insertOne(burgerName, isDevoured);
    res.json(result);
}
exports.addBurger = addBurger;
async function updateBurger(req, res) {
    try {
        const body = req.body;
        const burgerId = utils.convertToInteger(req.params.burgerId);
        const burgerName = body.burgerName;
        const devoured = utils.convertToBoolean(body.devoured);
        const result = await model_1.burger.updateOne(burgerId, burgerName, devoured);
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
}
exports.updateBurger = updateBurger;
async function deleteBurger(req, res) {
    const burgerId = req.params.burgerId;
    const result = await model_1.burger.deleteOne(burgerId);
    res.json(result);
}
exports.deleteBurger = deleteBurger;
//# sourceMappingURL=apiControllers.js.map