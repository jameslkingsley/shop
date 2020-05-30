import Basket from './basket'
import Stripe from './livewire/Stripe'

window.Basket = new Basket({
    deliveryCutOffTime: 14,
    maximumProductQuantity: 10
})

window.Wire = {
    Stripe
}

export default class {
    constructor(data) {
        for (let key in data) {
            this[key] = data[key]
        }
    }
}
