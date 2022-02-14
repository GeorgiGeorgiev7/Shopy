const { create } = require('express-handlebars');


const setViewEngine = (app) => {
    const hbs = create({
        extname: 'hbs'
    });

    app.engine('hbs', hbs.engine);
    app.set('view engine', 'hbs');
};

module.exports = setViewEngine;