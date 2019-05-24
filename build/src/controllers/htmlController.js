"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../models/model");
async function getIndex(req, res) {
    const context = await model_1.burger.selectAll();
    res.render('index', { burgers: context });
}
exports.getIndex = getIndex;
//# sourceMappingURL=htmlController.js.map