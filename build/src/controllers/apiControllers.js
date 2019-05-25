"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../models/model");
const utils = require("../utils/utils");
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
    const topping = body.topping;
    const isDevoured = utils.convertStringToBoolean(body.devoured);
    const result = await model_1.burger.insertOne(burgerName, topping, isDevoured);
    res.json(result);
}
exports.addBurger = addBurger;
async function updateBurger(req, res) {
    try {
        const body = req.body;
        const burgerId = utils.convertToInteger(req.params.burgerId);
        const burgerName = body.burgerName;
        const topping = body.topping;
        const devoured = utils.convertStringToBoolean(body.devoured);
        const result = await model_1.burger.updateOne(burgerId, burgerName, topping, devoured);
        res.json(result);
    }
    catch (err) {
        console.log(err);
    }
}
exports.updateBurger = updateBurger;
async function deleteBurger(req, res) {
    const burgerId = utils.convertToInteger(req.params.burgerId);
    const result = await model_1.burger.deleteOne(burgerId);
    res.json(result);
}
exports.deleteBurger = deleteBurger;
//# sourceMappingURL=apiControllers.js.map