const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    cart: {
        items: [{
            productId: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }]
    }
});

userSchema.methods.clearCart = async function () {
    this.cart.items = [];

    await this.save();
};

userSchema.methods.addToCart = async function (productId) {
    const cartProductIndex = this.cart.items
        .findIndex(cp =>
            cp.productId.toString() === productId.toString());

    if (cartProductIndex >= 0) {
        this.cart.items[cartProductIndex].quantity += 1;
    } else {
        this.cart.items.push({
            productId,
            quantity: 1
        });
    }

    await this.save();
};

userSchema.methods.removeFromCart = async function (productId) {
    this.cart.items = this.cart.items.filter(item =>
        item.productId.toString() !== productId.toString());

    await this.save();
};

module.exports = model('User', userSchema);