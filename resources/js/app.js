import Basket from './basket'
import Stripe from './livewire/Stripe'
import Checkout from './livewire/Checkout'
import Select from './components/Select'

window.Basket = new Basket({
    deliveryCutOffTime: 14,
    minimumBasketValue: 500,
    maximumProductQuantity: 10,
})

window.Wire = {
    Stripe,
    Checkout,
}

window.Components = {
    Select,
}

export default class {
    constructor(data) {
        for (let key in data) {
            this[key] = data[key]
        }
    }
}
