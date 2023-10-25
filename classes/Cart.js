const Product = require("./Product");

class Cart{
    constructor(){
        this.products = [];
        this.total = 0;
    }

    addProduct(newProduct){
        this.products.push(newProduct.name);
        this.total += newProduct.price;
    }

    removeProduct(index){
        const hole = this.products[index];
        this.products.splice(index,1);
        console.log(hole);
        for (let x = 0; x < this.products.length; x++){
            if (Product[x].name === hole){
                this.total -= hole.Product.price;
            }
        }

        /* const index = this.products.indexOf(prod);
        if (index !== -1){
            const remove = this.products.splice(index,1)[0];
            this.total -= remove.price;
        } */
        
        
    }
}

module.exports = Cart;