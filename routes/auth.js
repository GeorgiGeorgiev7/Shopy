const router = require('express').Router();

const authController = require('../controllers/auth');


router.get('/login', authController.getLoginPage());

router.post('/login', authController.login());

router.get('/signup', authController.getSignupPage());

router.post('/signup', authController.signup());

router.post('/logout', authController.logout());


module.exports = () => router;