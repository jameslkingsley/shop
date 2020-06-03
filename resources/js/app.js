import Basket from './basket'
import Stripe from './livewire/Stripe'
import Checkout from './livewire/Checkout'

window.Basket = new Basket({
    deliveryCutOffTime: 14,
    minimumBasketValue: 500,
    maximumProductQuantity: 10
})

window.Wire = {
    Stripe,
    Checkout,
}

export default class {
    constructor(data) {
        for (let key in data) {
            this[key] = data[key]
        }
    }
}
