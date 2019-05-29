"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as mysql from 'mysql';
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../../../.env') });
let configuration;
console.log(process.env.JAWSDB_URL);
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