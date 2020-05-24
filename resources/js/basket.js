export default class {
    constructor(config = {}) {
        this.config = config

        this.store = Spruce.store('basket', this.defaultState())

        this.restore()
    }

    defaultState() {
        return {
            items: {},
            cardId: null,
            addressId: null,
            collection: false,
        }
    }

    applyDefaults(defaults) {
        for (let key in defaults) {
            this.store[key] = defaults[key]
        }
    }

    total() {
        return _.sum(_.values(_.mapValues(this.store.items, ({ qty, price }) => qty * price)))
    }

    itemCount() {
        return _.keys(this.store.items).length
    }

    has(productId) {
        return this.store.items.hasOwnProperty(productId)
            && this.store.items[productId].qty > 0
    }

    clear() {
        Spruce.reset('basket', this.defaultState())

        this.save()
    }

    find(productId) {
        return _.get(this.store.items, productId, {})
    }

    add(product) {
        console.log(this, product)
        let existing = _.get(this.store.items, product.id, { ...product, qty: 0 })

        if (existing.qty >= this.config.maximumProductQuantity) {
            return false
        }

        _.set(existing, 'qty', existing.qty + 1)
        _.set(this.store.items, product.id, existing)

        return this.save()
    }

    remove(product) {
        let existing = _.get(this.store.items, product.id, { ...product, qty: 1 })

        _.set(existing, 'qty', existing.qty - 1)

        if (existing.qty <= 0) {
            _.unset(this.store.items, product.id)
        } else {
            _.set(this.store.items, product.id, existing)
        }

        return this.save()
    }

    restore() {
        this.store.items = JSON.parse(localStorage.getItem('basket') || '{}')

        console.log('Basket contents restored.')
    }

    save() {
        localStorage.setItem('basket', JSON.stringify(this.store.items))

        return true
    }
}
