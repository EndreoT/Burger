"use strict";
// import * as mysql from 'mysql';
Object.defineProperty(exports, "__esModule", { value: true });
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