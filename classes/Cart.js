const Product = require("./Product");

class Cart{
    constructor(){
        this.products = [];
        this.total = 0;
    }

    addProduct(newProduct){
        this.products.push(newProduct);
        this.total += newProduct.price;
    }

    removeProduct(index){
        const product = this.products[index];
        this.products.splice(index,1);
        this.total -= product.price;
    }
}

module.exports = Cart;