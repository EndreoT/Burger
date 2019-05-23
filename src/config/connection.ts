import * as mysql from 'mysql';


export const config: mysql.ConnectionConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '1234',
  database: 'bamazon',
};

