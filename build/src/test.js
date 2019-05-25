"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./models/model");
const utils_1 = require("./utils/utils");
const burger = new model_1.Burger();
// burger.selectAll().then(item => {
//   console.log(item)
// })
// burger.insertOne('newBurger', true).then(item => {
//   console.log(item)
// })
// burger.updateOne(5, "ok", false).then(item => {
//   console.log(item)
// })
// burger.deleteOne(4).then(item => {
//   console.log(item)
// })
console.log(utils_1.convertStringToBoolean('1'));
console.log(utils_1.convertStringToBoolean('-1'));
console.log(utils_1.convertStringToBoolean('0'));
// console.log(JSON.parse('adf'))
console.log(utils_1.convertStringToBoolean('34'));
console.log(utils_1.convertStringToBoolean('3sadf'));
console.log(utils_1.convertStringToBoolean('true'));
console.log(utils_1.convertStringToBoolean('false'));
//# sourceMappingURL=test.js.map