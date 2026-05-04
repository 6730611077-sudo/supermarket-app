const db = require('../models/db');
const fs = require('fs');
const path = require('path');

exports.getDashboard = async (req, res) => {
    try {
        let query = 'SELECT * FROM products ORDER BY id DESC';
        let queryParams = [];

        if (req.query.search) {
            query = 'SELECT * FROM products WHERE name LIKE ? ORDER BY id DESC';
            queryParams.push('%' + req.query.search + '%');
        }

        const [products] = await db.query(query, queryParams);
        res.render('index', { products, success: req.query.success, search: req.query.search });
    } catch (err) {
        console.log(err);
    }
};


exports.getForm = async (req, res) => {
    const id = req.query.id;
    if (id) {
        const [product] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
        res.render('form', { product: product[0] });
    } else {
        res.render('form', { product: null });
    }
};


exports.addProduct = async (req, res) => {
    const { name, category, price, stock } = req.body;
    const image = req.file ? req.file.filename : null;
    
    await db.query('INSERT INTO products (name, category, price, stock, image) VALUES (?, ?, ?, ?, ?)', 
        [name, category, price, stock, image]);
    
    res.redirect('/?success=added'); 
};


exports.updateProduct = async (req, res) => {
    const { id, name, category, price, stock } = req.body;
    let newImage = req.file ? req.file.filename : null;

    const [oldProduct] = await db.query('SELECT image FROM products WHERE id = ?', [id]);
    
    if (newImage) {
        if (oldProduct[0].image) {
            fs.unlink(path.join(__dirname, '../uploads', oldProduct[0].image), err => {
                if (err) console.log("Error deleting old image:", err);
            });
        }
    } else {
        newImage = oldProduct[0].image; 
    }

    await db.query('UPDATE products SET name=?, category=?, price=?, stock=?, image=? WHERE id=?', 
        [name, category, price, stock, newImage, id]);
    
    res.redirect('/?success=updated'); 
};


exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    const [product] = await db.query('SELECT image FROM products WHERE id = ?', [id]);
    
    if (product[0] && product[0].image) {
        fs.unlink(path.join(__dirname, '../uploads', product[0].image), err => {
            if (err) console.log("Error deleting image:", err);
        });
    }
    await db.query('DELETE FROM products WHERE id = ?', [id]);
    res.redirect('/?success=deleted'); 
};
