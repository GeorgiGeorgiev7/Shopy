const router = require('express').Router();
const path = require('path');


const { products } = require('./admin');

router.get('/', (req, res) => {

    res.render('shop', { products, docTitle: 'Shopy' });
});

module.exports = () => router;
