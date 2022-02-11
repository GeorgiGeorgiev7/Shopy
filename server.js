const path = require('path');

const express = require('express');
const { create } = require('express-handlebars');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

const errorController = require('./controllers/404');


const app = express();

const hbs = create({
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter());
app.use(shopRouter());

app.use(errorController());

app.listen(5000, () =>
    console.log('>>> Server running: http://localhost:5000'));
