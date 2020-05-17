import basket from './basket'

export default class {
    constructor(data) {
        this.basket = basket

        for (let key in data) {
            this[key] = data[key]
        }
    }
}
