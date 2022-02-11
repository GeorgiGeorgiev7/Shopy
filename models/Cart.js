const Product = require('./Product');


cart = {
    content: [],
    totalPrice: 0
};

module.exports = class Cart {
    static addProduct(product) {
        console.log(product)
        if (!cart.content.find(p => p.id == product.id)) {
            product.quantity = 0;
            cart.content.push(product);
        }
        product.quantity += 1;
        cart.totalPrice += +product.price;
    }

    static getCart() {
        return cart;
    }
};