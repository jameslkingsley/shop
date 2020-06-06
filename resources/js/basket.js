export default class {
    constructor(config = {}) {
        this.config = config

        this.store = Spruce.store('basket', this.defaultState())

        this.restore()
    }

    defaultState() {
        return {
            items: {},
            orderId: null,
        }
    }

    applyDefaults(defaults) {
        for (let key in defaults) {
            this.store[key] = defaults[key]
        }
    }

    isEditingOrder() {
        return !! this.store.orderId
    }

    cancelEditing() {
        let orderId = this.store.orderId

        this.clear()

        Turbolinks.visit(`/orders/${orderId}`)
    }

    editOrder(order) {
        this.store.orderId = order.id

        for (let item of order.items) {
            this.store.items[item.product.prodID] = {
                id: item.product.prodID,
                price: Number(item.product.prodOurPrice) * 100,
                qty: item.quantity,
                ref: item.product.prodRef,
                unit_size: item.product.prodUnitSize,
            }
        }

        this.save()

        Turbolinks.visit('/basket')
    }

    canPlaceOrder(higherOrderState) {
        // Prevent order if the Livewire state
        // deems the order invalid.
        if (! higherOrderState) {
            return false
        }

        return this.isSufficient()
    }

    isSufficient() {
        let items = this.items()

        if (! items.length) {
            return false
        }

        if (_.sum(_.map(items, ({ qty, price }) => qty * price)) <= this.config.minimumBasketValue) {
            return false
        }

        return true
    }

    orderId() {
        return this.store.orderId
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
        this.store.orderId = null

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
        this.store.orderId = Number(localStorage.getItem('orderId'))
        this.store.items = JSON.parse(localStorage.getItem('basket') || '{}')
    }

    save() {
        localStorage.setItem('orderId', this.store.orderId)
        localStorage.setItem('basket', JSON.stringify(this.store.items))

        return true
    }
}
