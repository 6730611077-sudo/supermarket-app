// โค้ดสำหรับไฟล์ models/db.js
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root', // ปกติ XAMPP จะใช้ root
    password: '', // ปกติ XAMPP รหัสผ่านจะว่างเปล่า
    database: 'supermarket_db' // ชื่อฐานข้อมูลที่เราสร้างไว้
});

module.exports = pool.promise();