const router = require('express').Router();

const adminController = require('../controllers/admin');

const isAuthenticated = require('../middlewares/guards/isAuthenticated');


router.get('/products',
    isAuthenticated(),
    adminController.getAdminProductsPage());

router.get('/add-product',
    isAuthenticated(),
    adminController.getAddProductPage());

router.post('/add-product',
    isAuthenticated(),
    adminController.postProduct());

router.get('/edit-product/:productId',
    isAuthenticated(),
    adminController.getEditProductPage());

router.post('/edit-product/:productId',
    isAuthenticated(),
    adminController.editProduct());

router.post('/delete-product/:productId',
    isAuthenticated(),
    adminController.deleteProduct());


module.exports = () => router;
