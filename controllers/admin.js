const Product = require('../models/Product');


exports.getAdminProductsPage = () => async (req, res, next) => {
    const products = await Product.find().lean();
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

exports.postProduct = () => async (req, res) => {
    const { title, imageUrl, description, price } = req.body;

    const product = new Product({
        title,
        imageUrl,
        description,
        price: Number(price),
        creatorId: req.user._id
    });

    await product.save();

    res.redirect('/');
};

exports.getEditProductPage = () => async (req, res, next) => {
    const product = await Product
        .findById(req.params.productId)
        .lean();

    if (!product) {
        return res.redirect('/404');
    }
    res.render('admin/edit-product', {
        product,
        productsCSS: true,
        formsCSS: true
    });
};

exports.editProduct = () => async (req, res) => {
    const productId = req.params.productId;
    const existing = await Product.findById(productId);

    const { title, imageUrl, description, price } = req.body;

    Object.assign(existing, {
        title,
        imageUrl,
        description,
        price
    });

    await existing.save();

    res.redirect(`/products/${productId}`);
};

exports.deleteProduct = () => async (req, res) => {
    const productId = req.params.productId;
    await Product.findByIdAndRemove(productId);

    res.redirect('/admin/products');
};