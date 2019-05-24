"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("./models/model");
const burger = new model_1.Burger();
// burger.selectAll().then(item => {
//   console.log(item)
// })
// burger.insertOne('newBurger', true).then(item => {
//   console.log(item)
// })
burger.updateOne(5, "ok", false).then(item => {
    console.log(item);
});
// burger.deleteOne(4).then(item => {
//   console.log(item)
// })
//# sourceMappingURL=test.js.map