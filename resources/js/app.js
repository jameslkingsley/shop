import Basket from './basket'

window.Basket = new Basket({
    deliveryCutOffTime: 14,
    maximumProductQuantity: 10
})

export default class {
    constructor(data) {
        for (let key in data) {
            this[key] = data[key]
        }
    }
}
