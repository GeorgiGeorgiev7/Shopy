const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);

const { SECRET, CONNECTION_STRING } = require('../config');

const setSession = (app) => {
    const store = new MongoStore({
        uri: CONNECTION_STRING,
        collection: 'sessions'
    });

    app.use(session({
        secret: SECRET,
        resave: false,
        saveUninitialized: false,
        store
    }));
};

module.exports = setSession;
