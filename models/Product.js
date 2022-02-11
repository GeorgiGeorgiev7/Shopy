const products = [];

module.exports = class Product {
    constructor(title, imageUrl, description, price) {
        this.id = Math.random().toString().slice(2);
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
    }

    save() {
        products.push(this);
    }

    edit(updatedProduct) {
        for (let prop in updatedProduct) {
            this[prop] = updatedProduct[prop];
        }
    }

    static fetchAll() {
        return products;
    }

    static findById(id) {
        return products.find(p => p.id == id);
    }

    static findByIdAndDelete(id) {
        const productIndex = products.findIndex(p => p.id == id);
        products.splice(productIndex, 1);
        console.log(products);
    }

};