const express = require('express');

const path = require('path');

const connectDatabase = require('./database');
const setViewEngine = require('./view-engine');

const adminRouter = require('../routes/admin');
const shopRouter = require('../routes/shop');

const errorController = require('../controllers/404');

const User = require('../models/User');


const setupMiddlewares = (app) => {
    app.use(async (req, res, next) => {
        req.user = await User.findById('62091802824bcbcfcc8a2865');
        next();
    });

    connectDatabase();
    setViewEngine(app);

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, '..', 'public')));

    app.use('/admin', adminRouter());
    app.use(shopRouter());

    app.use(errorController());

    // const user = new User({
    //     name: 'name',
    //     email: 'name@name.name',
    //     cart: {
    //         items: []
    //     }
    // });

    // user.save();
};

module.exports = setupMiddlewares;