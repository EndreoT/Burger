"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const htmlController = require("../controllers/htmlController");
const router = express.Router();
router.get('/', htmlController.getIndex);
exports.htmlRouter = router;
//# sourceMappingURL=htmlRoutes.js.map