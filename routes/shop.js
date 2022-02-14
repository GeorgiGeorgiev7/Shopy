const router = require('express').Router();

const shopController = require('../controllers/shop');

const isAuthenticated = require('../middlewares/guards/isAuthenticated');


router.get('/',
    shopController.getIndexPage());

router.get('/products',
    shopController.getAllProductsPage());

router.get('/products/:productId',
    shopController.getDetailsPage());

router.get('/cart',
    isAuthenticated(),
    shopController.getCartPage());

router.post('/cart/:productId',
    isAuthenticated(),
    shopController.postProductToCart());

router.post('/cart-delete/:productId',
    isAuthenticated(),
    shopController.removeProductFromCart());

router.get('/orders',
    isAuthenticated(),
    shopController.getOrdersPage());

router.post('/orders',
    isAuthenticated(),
    shopController.postOrder());

router.get('/checkout',
    isAuthenticated(),
    shopController.getCheckoutPage());


module.exports = () => router;
