const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', 
    password: '', 
    database: 'supermarket_db' 
});

module.exports = pool.promise();
