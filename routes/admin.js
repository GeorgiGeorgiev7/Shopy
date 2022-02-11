const router = require('express').Router();

const adminController = require('../controllers/admin');


router.get('/products', adminController.getAdminProductsPage());

router.get('/add-product', adminController.getAddProductPage());

router.post('/add-product', adminController.postProduct());

router.get('/edit-product/:productId', adminController.getEditProductPage());

router.post('/edit-product/:productId', adminController.editProduct());

router.post('/delete-product/:productId', adminController.deleteProduct());


module.exports = () => router;
