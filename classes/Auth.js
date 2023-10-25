const Customer = require('./Customer');

class Auth {
    constructor() {
        this.customers = [];
    }


    register(name, email, shippingAddress) {
        const newCustomer = new Customer(name, email, shippingAddress);
        this.customers.push(newCustomer);
    }

    login(email) {
        for (const customer of this.customers) {
            if (customer.email === email) {
                return customer;
            }
        }
    }

}

module.exports = Auth;