const Product = require('./Product');


const cart = {
    content: [],
    totalPrice: 0
};

module.exports = class Cart {
    static addProduct(product) {
        if (!cart.content.find(p => p.id == product.id)) {
            product.quantity = 0;
            cart.content.push(product);
        }
        product.quantity += 1;
        cart.totalPrice += +product.price;
    }

    static deleteProduct(productId) {
        cart.content = cart.content.filter(p => {
            p.id != productId;
            cart.totalPrice -= p.price * p.quantity;
        });
        console.log(cart);
    }

    static getCart() {
        return cart;
    }
};