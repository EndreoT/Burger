"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
// Path has extra ../ because of build/src compile structure
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });
let configuration;
if (process.env.JAWSDB_URL) {
    configuration = process.env.JAWSDB_URL;
}
else {
    configuration = {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '1234',
        database: 'burgers_db',
    };
}
exports.config = configuration;
//# sourceMappingURL=connectionConfig.js.map