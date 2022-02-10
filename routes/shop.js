const router = require('express').Router();

const { products } = require('./admin');


router.get('/', (req, res) => {

    res.render('shop', {
        products,
        path: '/'
    });
});

module.exports = () => router;
