const Product = require('../models/Product');
const Order = require('../models/Order');


const cartViewModel = cart => {
    const productModelView = product => {
        return {
            _id: product._id,
            title: product.title,
            price: product.price,
            description: product.description,
            imageUrl: product.imageUrl,
            creatorId: product.creatorId
        };
    };

    const itemViewModel = item => {
        return {
            _id: item._id,
            productId: productModelView(item.productId),
            quantity: item.quantity
        };
    };

    return {
        items: cart.items.map(itemViewModel)
    };
};

exports.getIndexPage = () => async (req, res) => {
    const products = await Product.find().lean();

    res.render('shop/index', {
        isAuthenticated: req.session.user,
        products,
        activeIndex: true,
        productsCSS: true
    });
};

exports.getAllProductsPage = () => async (req, res) => {
    const products = await Product.find().lean();

    res.render('shop/product-list', {
        isAuthenticated: req.session.user,
        pageTitle: 'Shopy',
        products,
        activeProducts: true,
        productsCSS: true
    });
};

exports.getDetailsPage = () => async (req, res) => {
    const product = await Product
        .findById(req.params.productId)
        .lean();

    res.render('shop/product-details', {
        isAuthenticated: req.session.user,
        product
    });
};

exports.getCartPage = () => async (req, res) => {
    const user = await req.user.populate('cart.items.productId');

    res.render('shop/cart', {
        isAuthenticated: req.session.user,
        activeCart: true,
        cartCSS: true,
        cart: cartViewModel(user.cart)
    });
};

exports.postProductToCart = () => async (req, res) => {
    await req.user.addToCart(req.params.productId);
    res.redirect('/cart');
};

exports.removeProductFromCart = () => async (req, res) => {
    await req.user.removeFromCart(req.params.productId);
    console.log('removed');
    res.redirect('/cart');
};

exports.getOrdersPage = () => async (req, res) => {
    const orders = await Order.find({ 'user.userId': req.session.user._id }).lean();

    res.render('shop/orders', {
        isAuthenticated: req.session.user,
        activeOrders: true,
        ordersCSS: true,
        orders
    });
};

exports.postOrder = () => async (req, res) => {
    const user = await req.user.populate('cart.items.productId');

    const products = user.cart.items.map(i => ({
        productData: { ...i.productId._doc },
        quantity: i.quantity
    }));

    const order = new Order({
        products,
        user: {
            name: req.session.user.name,
            userId: req.session.user._id
        }
    });

    await order.save();
    await req.user.clearCart();

    res.redirect('/orders');
};

exports.getCheckoutPage = () => (req, res) => {
    res.render('shop/checkout', {
        isAuthenticated: req.session.user,
        activeCheckout: true
    });
};