const Product = require('../models/Product');
const Cart = require('../models/Cart');


exports.getAdminProductsPage = () => (req, res, next) => {
    const products = Product.fetchAll();
    res.render('admin/products', {
        products,
        activeAdminProducts: true,
        productsCSS: true
    });
};

exports.getAddProductPage = () => (req, res) => {
    res.render('admin/add-product', {
        activeAddProduct: true,
        productsCSS: true,
        formsCSS: true
    });
};

exports.postProduct = () => (req, res) => {
    const { title, imageUrl, description, price } = req.body;

    const product = new Product(title, imageUrl, description, +price);
    product.save();

    res.redirect('/');
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

exports.editProduct = () => (req, res) => {
    const productId = req.params.productId;
    const existing = Product.findById(productId);

    const { title, imageUrl, description, price } = req.body;
    const updatedProduct = { title, imageUrl, description, price };

    existing.edit(updatedProduct);

    res.redirect(`/products/${productId}`);
};

exports.deleteProduct = () => (req, res) => {
    const productId = req.params.productId;
    Cart.removeProduct(productId);
    Product.findByIdAndDelete(productId);
    
    res.redirect('/admin/products');
};