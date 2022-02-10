const router = require('express').Router();

const productsController = require('../controllers/products');


router.get('/add-product', productsController.getAddProductPage());

router.post('/product', productsController.postProduct());


module.exports = () => router;
