const express = require('express');

const app = express();


app.use(express.urlencoded({extended: true})); 

app.get('/add-product', (req, res) => {
    res.send('<form action="/product" method="POST"><input name="title"/><button type="submit"/>');
});

app.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/', (req, res) => {
    res.send('<h1>Welcome to my shop!</h1');
});


app.listen(5000, () =>
    console.log('>>> Server running: http://locallhost:5000'));
