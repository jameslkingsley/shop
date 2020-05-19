export default {
    config: {
        maximumProductQuantity: 10,
    },

    items: {},
    cardId: null,
    collection: false,
    paymentMethod: 'online',

    itemsArray() {
        return _.values(this.items)
    },

    total() {
        return _.sum(_.values(_.mapValues(this.items, ({ qty, price }) => qty * price)))
    },

    itemCount() {
        return _.keys(this.items).length
    },

    has(productId) {
        return this.items.hasOwnProperty(productId)
    },

    clear() {
        this.items = {}
        this.save()
    },

    find(productId) {
        return _.get(this.items, productId, {})
    },

    add(product) {
        let existing = _.get(this.items, product.id, { ...product, qty: 0 })

        if (existing.qty >= this.config.maximumProductQuantity) {
            return false
        }

        _.set(existing, 'qty', existing.qty + 1)
        _.set(this.items, product.id, existing)

        return this.save()
    },

    remove(product) {
        let existing = _.get(this.items, product.id, { ...product, qty: 1 })

        _.set(existing, 'qty', existing.qty - 1)

        if (existing.qty <= 0) {
            _.unset(this.items, product.id)
        } else {
            _.set(this.items, product.id, existing)
        }

        return this.save()
    },

    restore() {
        this.items = JSON.parse(localStorage.getItem('basket') || '{}')
    },

    save() {
        localStorage.setItem('basket', JSON.stringify(this.items))
        return true
    },
}
