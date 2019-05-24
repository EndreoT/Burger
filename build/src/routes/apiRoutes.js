"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const apiController = require("../controllers/apiControllers");
const router = express.Router();
router.get('/burgers', apiController.getAllBurgers);
// export {router};
exports.apiRouter = router;
//# sourceMappingURL=apiRoutes.js.map