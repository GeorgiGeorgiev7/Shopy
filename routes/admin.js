const router = require('express').Router();


const products = [];

router.get('/add-product', (req, res) => {
    res.render('add-product', {
        path: '/admin/add-product',
        activeAddProduct: true,
        productsCSS: true,
        formsCSS: true
    });
});

router.post('/product', (req, res) => {
    products.push({ title: req.body.title });
    res.redirect('/');
});


module.exports = {
    router: () => router,
    products
};
