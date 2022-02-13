const express = require('express');

const path = require('path');

const connectDatabase = require('./database');
const setViewEngine = require('./view-engine');

const adminRouter = require('../routes/admin');
const shopRouter = require('../routes/shop');

const errorController = require('../controllers/404');


const setupMiddlewares = (app) => {
    connectDatabase();
    setViewEngine(app);

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, '..', 'public')));

    app.use('/admin', adminRouter());
    app.use(shopRouter());

    app.use(errorController());
};

module.exports = setupMiddlewares;