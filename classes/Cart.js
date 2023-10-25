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
        
        /* const index = this.products.indexOf(prod);
        if (index !== -1){
            const remove = this.products.splice(index,1)[0];
            this.total -= remove.price;
        } */
        
        
    }
}

module.exports = Cart;