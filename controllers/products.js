const Product = require('../models/Product');


exports.getAddProductPage = () => (req, res) => {
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        activeAddProduct: true,
        productsCSS: true,
        formsCSS: true
    });
};

exports.postProduct = () => (req, res) => {
    const product = new Product(req.body.title);
    product.save();

    res.redirect('/');
};

exports.getAllProducts = () => (req, res) => {
    const products = Product.fetchAll();
    res.render('shop', {
        pageTitle: 'Shopy',
        products,
        activeShop: true,
        productsCSS: true
    });
};