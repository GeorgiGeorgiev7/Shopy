const Product = require('../models/Product');


exports.getAllProductsPage = () => (req, res) => {
    const products = Product.fetchAll();
    res.render('shop/product-list', {
        pageTitle: 'Shopy',
        products,
        activeProducts: true,
        productsCSS: true
    });
};

exports.getIndexPage = () => (req, res, next) => {
    const products = Product.fetchAll();
    console.log('here');
    res.render('shop/index', {
        pageTitle: 'Shopy',
        products,
        activeIndex: true,
        productsCSS: true
    });
};

exports.getCartPage = () => (req, res, next) => {
    res.render('shop/cart', {
        activeCart: true
    });
};

exports.getCheckoutPage = () => (req, res, next) => {
    res.render('shop/checkout', {
        activeCheckout: true
    });
};