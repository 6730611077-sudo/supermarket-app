const express = require('express');
const router = express.Router();
const multer = require('multer');
const productController = require('../controllers/productController');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads/'); 
    },
    filename: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        cb(null, Date.now() + ext); 
    }
});
const upload = multer({ storage: storage });

router.get('/', productController.getDashboard);
router.get('/form', productController.getForm);
router.post('/add', upload.single('image'), productController.addProduct);
router.post('/update', upload.single('image'), productController.updateProduct);
router.get('/delete/:id', productController.deleteProduct);

module.exports = router;