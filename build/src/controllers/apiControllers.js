"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../models/model");
async function getAllBurgers(req, res) {
    const burgers = await model_1.burger.selectAll();
    res.json(burgers);
}
exports.getAllBurgers = getAllBurgers;
async function addBurger(req, res) {
    const body = req.body;
    const burgerName = body.burgerName;
    const isDevoured = body;
    const result = await model_1.burger.insertOne(burgerName, isDevoured);
    res.json(result);
}
exports.addBurger = addBurger;
async function updateBurger(req, res) {
    function convertToBoolean(input) {
        try {
            return JSON.parse(input);
        }
        catch (e) {
            return false;
        }
    }
    function convertToInteger(input) {
        let result = Number(input);
        if (isNaN(result) || !Number.isInteger(result)) {
            result = -1;
        }
        return result;
    }
    try {
        const body = req.body;
        const burgerId = convertToInteger(req.params.burgerId);
        const burgerName = body.burgerName;
        const devoured = convertToBoolean(body.devoured);
        console.log(burgerId, burgerName, devoured);
        console.log(typeof burgerId, typeof burgerName, typeof devoured);
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