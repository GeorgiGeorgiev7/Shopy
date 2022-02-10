const router = require('express').Router();

const adminController = require('../controllers/admin');


router.get('/add-product', adminController.getAddProductPage());

router.get('/products', adminController.getAdminProductsPage());

router.post('/product', adminController.postProduct());


module.exports = () => router;
