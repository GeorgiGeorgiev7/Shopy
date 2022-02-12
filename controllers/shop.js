const Product = require('../models/Product');
const Cart = require('../models/Cart');


exports.getIndexPage = () => (req, res) => {
    const products = Product.fetchAll();
    res.render('shop/index', {
        products,
        activeIndex: true,
        productsCSS: true
    });
};

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

exports.getCartPage = () => (req, res) => {
    const cart = Cart.getCart();
    res.render('shop/cart', {
        activeCart: true,
        cart
    });
};

exports.postProductToCart = () => (req, res) => {
    const product = Product.findById(req.params.productId);
    Cart.addProduct(product);
    res.redirect('/cart');
};

exports.removeProductFromCart = () => (req, res) => {
    Cart.removeProduct(req.params.productId);
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