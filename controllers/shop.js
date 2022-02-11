const Product = require('../models/Product');
const Cart = require('../models/Cart');


exports.getAllProductsPage = () => (req, res) => {
    const products = Product.fetchAll();
    res.render('shop/product-list', {
        pageTitle: 'Shopy',
        products,
        activeProducts: true,
        productsCSS: true
    });
};

exports.getDetailsPage = () => (req, res) => {
    const id = req.params.id;
    const product = Product.findById(id);
    res.render('shop/product-details', product);
};

exports.getIndexPage = () => (req, res) => {
    const products = Product.fetchAll();
    res.render('shop/index', {
        pageTitle: 'Shopy',
        products,
        activeIndex: true,
        productsCSS: true
    });
};

exports.getCartPage = () => (req, res) => {
    res.render('shop/cart', {
        activeCart: true
    });
};

exports.postProductToCart = () => (req, res) => {
    console.log(req.body.productId);
    const product = Product.findById(req.body.productId);
    Cart.addProduct(product);
    res.redirect('/cart');
};

exports.getOrdersPage = () => (req, res) => {
    res.render('shop/orders', {
        activeOrders: true
    });
};

exports.getCheckoutPage = () => (req, res) => {
    res.render('shop/checkout', {
        activeCheckout: true
    });
};