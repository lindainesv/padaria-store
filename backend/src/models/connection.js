const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: process.env.MYSQL_HOSTNAME || 'localhost',
  port: process.env.MYSQL_PORT || 3306,
  user: 'root',
  password: 'password',
  database: 'Store',
});

module.exports = connection;