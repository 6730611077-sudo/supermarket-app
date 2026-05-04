const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', productRoutes); 

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
