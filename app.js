const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// --- 1. เพิ่มบรรทัดนี้ (ดึงไฟล์ routes มาใช้) ---
const productRoutes = require('./routes/productRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// --- 2. เพิ่มบรรทัดนี้ (เรียกใช้งาน routes) ---
app.use('/', productRoutes); 

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});