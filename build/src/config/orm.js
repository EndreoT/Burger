"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const connectionConfig_1 = require("./connectionConfig");
class ORM {
    constructor(config) {
        this.connection = mysql.createConnection(config);
    }
    selectAll(tableName) {
        const query = "Select * FROM ??;";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [tableName], (err, burgers) => {
                if (err)
                    reject(err);
                resolve(burgers);
            });
        });
    }
    selectOne(tableName, burgerId) {
        const query = "Select * FROM ?? WHERE ?;";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [
                tableName,
                { "id": burgerId },
            ], (err, burger) => {
                if (err)
                    reject(err);
                resolve(burger);
            });
        });
    }
    insertOne(tableName, burgerName, topping, devoured) {
        const query = "INSERT INTO ?? SET ? ;";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [
                tableName,
                {
                    burger_name: burgerName,
                    topping,
                    devoured,
                },
            ], (err, data) => {
                if (err)
                    reject(err);
                resolve(data);
            });
        });
    }
    updateOne(tableName, burgerId, burgerName, topping, devoured) {
        const query = "UPDATE ?? SET ? WHERE ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [
                tableName,
                {
                    burger_name: burgerName,
                    topping,
                    devoured,
                },
                {
                    id: burgerId,
                },
            ], (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
    deleteOne(tableName, burgerId) {
        const query = "DELETE FROM ?? WHERE ?";
        return new Promise((resolve, reject) => {
            this.connection.query(query, [
                tableName,
                {
                    id: burgerId,
                },
            ], (err, data) => {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
    // End connection to DB
    close() {
        this.connection.end((err) => {
            if (err) {
                console.log(err);
            }
        });
    }
}
exports.ORM = ORM;
const orm = new ORM(connectionConfig_1.config);
exports.orm = orm;
//# sourceMappingURL=orm.js.map