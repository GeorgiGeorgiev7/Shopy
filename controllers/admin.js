const Product = require('../models/Product');


exports.getAddProductPage = () => (req, res) => {
    res.render('admin/add-product', {
        activeAddProduct: true,
        productsCSS: true,
        formsCSS: true
    });
};

exports.getEditProductPage = () => (req, res, next) => {
    const product = Product.findById(req.params.productId);
    if (!product) {
        return res.redirect('/404');
    }
    res.render('admin/edit-product', {
        product,
        productsCSS: true,
        formsCSS: true
    });
};

exports.getAdminProductsPage = () => (req, res, next) => {
    const products = Product.fetchAll();
    res.render('admin/products', {
        products,
        activeAdminProducts: true,
        productsCSS: true
    });
};

exports.postProduct = () => (req, res) => {
    const { title, imageUrl, description, price } = req.body;

    const product = new Product(title, imageUrl, description, +price);
    product.save();

    res.redirect('/');
};