// Import Classes Here
const Product = require("./classes/Product.js");
const Cart = require("./classes/Cart.js");
const p1 = new Product("cabbage", 5, "");
const p2 = new Product("pickle", 3, "");
const cart = new Cart();
cart.addProduct(p1)
cart.addProduct(p2)
console.log(cart)
cart.removeProduct(0)
console.log(cart);


// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Product,
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer
    }
} catch(e){

}

try {
    module.exports = {
        Product,
        Cart,
        Customer,
        Auth
    }
} catch(e){

}