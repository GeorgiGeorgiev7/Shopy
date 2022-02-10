const router = require('express').Router();

const { products } = require('./admin');


router.get('/', (req, res) => {
    console.log(products);
    res.render('shop', {
        products,
        pageTitle: 'Shopy',
        activeShop: true,
        productsCSS: true
    });
});

module.exports = () => router;
