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

    static fetchAll() {
        return products;
    }

    static findById(id) {
        return products.find(p => p.id == id);
    }

};