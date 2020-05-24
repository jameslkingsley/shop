import Basket from './basket'

window.Basket = new Basket({
    maximumProductQuantity: 10
})

export default class {
    constructor(data) {
        for (let key in data) {
            this[key] = data[key]
        }
    }
}
