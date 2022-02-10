const express = require('express');

const path = require('path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { create } = require('express-handlebars');


const app = express();

const hbs = create({
    extname: 'hbs'
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.router());
app.use(shopRoutes());

app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found', message: 'Wrong path' });
});

app.listen(5000, () =>
    console.log('>>> Server running: http://locallhost:5000'));
