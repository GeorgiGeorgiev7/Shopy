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

    static removeProduct(productId) {
        const productIdx = cart.content
            .findIndex(p => p.id == productId);

        if (productIdx == -1) {
            return;
        }

        const prod = cart.content[productIdx];

        cart.content.splice(productIdx, 1);

        cart.totalPrice -= prod.price * prod.quantity;
    }

    static getCart() {
        return cart;
    }
};