"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./models/model");
const connectionConfig_1 = require("./config/connectionConfig");
const burger = new model_1.Burger(connectionConfig_1.config);
// burger.selectAll().then(item => {
//   console.log(item)
// })
// burger.insertOne('newBurger', true).then(item => {
//   console.log(item)
// })
// burger.updateOne(4, "ok", false).then(item => {
//   console.log(item)
// })
// burger.deleteOne(4).then(item => {
//   console.log(item)
// })
//# sourceMappingURL=test.js.map