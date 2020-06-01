export default class {
    constructor(config = {}) {
        this.config = config

        this.store = Spruce.store('basket', this.defaultState())

        this.restore()
    }

    defaultState() {
        return {
            items: {},
        }
    }

    applyDefaults(defaults) {
        for (let key in defaults) {
            this.store[key] = defaults[key]
        }
    }

    items() {
        return _.filter(_.values(this.store.items), ({ qty }) => qty > 0)
    }

    total() {
        return _.sum(_.values(_.mapValues(this.store.items, ({ qty, price }) => qty * price)))
    }

    itemCount() {
        return _.keys(this.store.items).length
    }

    has(productId) {
        return productId in this.store.items
            && this.store.items[productId].qty > 0
    }

    clear() {
        for (let key in this.store.items) {
            delete this.store.items[key]
        }

        Spruce.updateSubscribers()

        this.save()
    }

    find(productId) {
        return _.get(this.store.items, productId, {})
    }

    add(product) {
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
            delete this.store.items[product.id]
        } else {
            _.set(this.store.items, product.id, existing)
        }

        return this.save()
    }

    restore() {
        this.store.items = JSON.parse(localStorage.getItem('basket') || '{}')
    }

    save() {
        localStorage.setItem('basket', JSON.stringify(this.store.items))

        return true
    }
}
