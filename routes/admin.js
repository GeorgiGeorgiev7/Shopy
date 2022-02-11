const router = require('express').Router();

const adminController = require('../controllers/admin');


router.get('/add-product', adminController.getAddProductPage());

router.get('/edit-product/:productId', adminController.getEditProductPage());

router.get('/products', adminController.getAdminProductsPage());

router.post('/add-product', adminController.postProduct());


module.exports = () => router;
