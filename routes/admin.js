const router = require('express').Router();


router.get('/add-product', (req, res) => {
    res.send('<form action="/product" method="POST"><input name="title"/><button type="submit"/></form>');
});

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});


module.exports = () => router;