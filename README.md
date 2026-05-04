# supermarket-app
ระบบจัดการคลังสินค้าแบบ MVC เพื่อโครงสร้างโค้ดที่เป็นระเบียบ จัดการง่าย และพร้อมต่อยอดในอนาคต

คุณสมบัติของระบบ (Features)
Dashboard & Search: แสดงรายการสินค้าทั้งหมด (ตาราง/กริด) พร้อมระบบค้นหาจาก Navbar

CRUD Operations: จัดการ เพิ่ม แก้ไข และลบข้อมูลสินค้าได้ครบถ้วน

Image Upload & Preview: อัปโหลดรูปด้วย Multer, มีภาพพรีวิว, และลบไฟล์รูปเก่าออกจากเซิร์ฟเวอร์อัตโนมัติ

Stock Alert: แจ้งเตือน Out of Stock หากสินค้าหมด

Safety & Alerts: มี Pop-up ยืนยันก่อนลบข้อมูล และแจ้งเตือนเมื่อบันทึกข้อมูลสำเร็จ

เทคโนโลยีที่ใช้ (Tech Stack)
Node.js, Express.js, MySQL (mysql2), EJS, Multer, Body-parser, Bootstrap 5

การติดตั้งและใช้งาน (Installation)
1. เตรียมฐานข้อมูล (Database)
เปิด XAMPP (Apache/MySQL) สร้าง Database ชื่อ supermarket_db และรันคำสั่ง SQL สร้างตารางดังนี้:

CREATE TABLE products (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
category VARCHAR(100),
price DECIMAL(10, 2),
stock INT,
image VARCHAR(255),
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

2. ติดตั้งโปรเจกต์ (Setup)
เปิด Terminal ในโฟลเดอร์โปรเจกต์ แล้วรันคำสั่งเพื่อติดตั้งแพ็กเกจ:

npm install

(หากเริ่มโปรเจกต์ใหม่ที่ยังไม่มี package.json ให้รัน npm init -y ตามด้วย npm i express ejs mysql2 body-parser multer nodemon)

3. ตั้งค่าฐานข้อมูล (Database Config)
ตรวจสอบไฟล์เชื่อมต่อฐานข้อมูล (เช่น app.js) และแก้ค่าให้ตรงกับเครื่องของคุณ:

const connection = mysql.createConnection({
host: 'localhost',
user: 'root',
password: '',
database: 'supermarket_db'
});

4. รันโปรแกรม (Run)
เริ่มต้นเซิร์ฟเวอร์ด้วยคำสั่ง:

npm run start

(หรือ npx nodemon app.js / node app.js) จากนั้นเปิด Web Browser แล้วเข้าใช้งานที่
