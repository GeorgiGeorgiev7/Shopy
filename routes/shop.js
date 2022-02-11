const router = require('express').Router();

const shopController = require('../controllers/shop');

router.get('/', shopController.getIndexPage());

router.get('/products', shopController.getAllProductsPage());

router.get('/products/:id', shopController.getDetailsPage());

router.get('/cart', shopController.getCartPage());

router.post('/cart', shopController.postProductToCart());

router.get('/orders', shopController.getOrdersPage());

router.get('/checkout', shopController.getCheckoutPage());


module.exports = () => router;
