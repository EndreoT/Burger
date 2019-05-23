import * as mysql from 'mysql';
export declare class Database {
    connection: mysql.Connection;
    constructor(config: mysql.ConnectionConfig);
    close(): void;
}
