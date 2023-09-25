require('dotenv').config();

const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host: 'localhost',
    port: 3307, 
    user: 'root',
    password: '123456',
    database: 'DB_ctd',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  module.exports = connection;