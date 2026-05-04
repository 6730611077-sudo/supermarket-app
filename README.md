# supermarket-app
ระบบจัดการคลังสินค้าซูเปอร์มาร์เก็ต พัฒนาด้วยสถาปัตยกรรม Model-View-Controller (MVC) เพื่อให้โครงสร้างโค้ดมีความสะอาด จัดการง่าย และรองรับการขยายตัวในอนาคต

คุณสมบัติของระบบ (Features)
Dashboard: แสดงสินค้าทั้งหมดในรูปแบบตารางหรือกริด โดยมี ชื่อ หมวดหมู่ ราคา จำนวนสต็อก และรูปภาพสินค้า

Search System: ช่องสำหรับค้นหาชื่อสินค้าจากแถบ Navbar

CRUD Operations: สามารถเพิ่ม แก้ไข และลบข้อมูลสินค้าได้

Image Upload: รองรับการอัปโหลดรูปภาพสินค้าด้วย Multer และมีระบบลบไฟล์ภาพเก่าทิ้งออกจากเซิร์ฟเวอร์โดยอัตโนมัติเมื่อมีการแก้ไขหรือลบสินค้า

Stock Visual Cue: หากสินค้าชิ้นใดมี Stock เท่ากับ 0 จะแสดงแถบ Out of Stock หรือแสดงตัวเลขเพื่อแจ้งเตือน

Safety Delete: มีระบบ Modal ยืนยันก่อนการลบข้อมูลเพื่อป้องกันการกดพลาด

Image Preview: แสดงรูปภาพตัวอย่างทันทีที่เลือกไฟล์ในหน้าเพิ่ม/แก้ไขสินค้า

Alert Notifications: แจ้งเตือนสถานะเมื่อเพิ่มหรือแก้ไขข้อมูลสำเร็จ

เทคโนโลยีที่ใช้ (Tech Stack)
Runtime: Node.js

Framework: Express.js

Database: MySQL (ใช้โมดูล mysql2)

Template Engine: EJS

Middleware: Multer, Body-parser

UI Framework: Bootstrap 5

ขั้นตอนการติดตั้งและเตรียมพร้อม (Installation & Setup)

1.เตรียมฐานข้อมูล (Database Setup)
   
  1.1 เปิดโปรแกรมจำลองเซิร์ฟเวอร์ (เช่น XAMPP) และเปิดการทำงานของ Apache และ MySQL

  1.2 เข้าไปที่ระบบจัดการฐานข้อมูล (เช่น http://localhost/phpmyadmin)

  1.3 สร้าง Database ใหม่ชื่อ supermarket_db

  1.4 นำเข้า (Import) ไฟล์ db.sql ที่แนบมากับโปรเจกต์ หรือนำคำสั่ง SQL ด้านล่างนี้ไปรันเพื่อสร้างตาราง:

    CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    price DECIMAL(10, 2),
    stock INT,
    image VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );


2. ติดตั้งโปรเจกต์ (Project Setup)
   
  2.1 นำทางไปยังโฟลเดอร์โปรเจกต์ของคุณผ่าน Terminal หรือ Command Prompt

  2.2 หากเป็นการเริ่มตั้งค่าโปรเจกต์ใหม่ ให้รันคำสั่งนี้เพื่อสร้างไฟล์ package.json (เผื่อไว้ในกรณีที่ยังไม่มีไฟล์นี้):

    npm init -y

  2.3 รันคำสั่งต่อไปนี้เพื่อติดตั้งแพ็กเกจ (Dependencies) ทั้งหมดที่จำเป็นในการรันโปรเจกต์:

    npm i express ejs mysql2 body-parser multer nodemon

    (หมายเหตุ: แต่ถ้าหากในโฟลเดอร์โปรเจกต์มีไฟล์ package.json อยู่แล้ว สามารถใช้คำสั่ง npm install คำสั่งเดียวได้เลย)
    

  3.ตั้งค่าการเชื่อมต่อฐานข้อมูล (Database Connection)
  เปิดไฟล์ที่ใช้ตั้งค่าฐานข้อมูล (เช่น app.js หรือ db.js) ตรวจสอบให้แน่ใจว่าการตั้งค่า Host, User, Password และ Database Name ตรงกับเครื่องของคุณ ตัวอย่างเช่น:

      const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'supermarket_db'
      });

  4. วิธีรันโปรเจกต์ (Running the Project)
  รันคำสั่งด้านล่างใน Terminal เพื่อเริ่มต้นเซิร์ฟเวอร์:

  npm run start
  
  (หรือหากเครื่องไหนไม่ได้ตั้งค่า script ไว้ใน package.json สามารถใช้คำสั่ง npx nodemon app.js หรือ node app.js แทนได้)
  
  เปิด Web Browser และเข้าไปที่ http://localhost:3000 (หรือพอร์ตที่คุณตั้งไว้) เพื่อใช้งานระบบ
