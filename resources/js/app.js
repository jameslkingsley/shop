import router from './router'
import routes from './routes'

import App from './views/App'

export default class {
    constructor(data) {
        this.bus = new Vue()

        for (let key in data) {
            this[key] = data[key]
        }
    }

    $emit(name, data) {
        this.bus.$emit(name, data)
    }

    $on(name, handler) {
        this.bus.$on(name, handler)
    }

    mixin() {
        return {
            filters: {
                currency(value) {
                    let langage = (navigator.language || navigator.browserLanguage).split('-')[0]

                    return (value / 100).toLocaleString(langage, { style: 'currency', currency: 'GBP' })
                },
            },

            computed: {
                $user() {
                    return this.$root.user
                }
            },

            methods: {
                $clearBasket() {
                    this.$root.basket = {}
                },

                $addToBasket(product) {
                    let existing = _.get(this.$root.basket, product.id, { ...product, qty: 0 })

                    _.set(existing, 'qty', existing.qty + 1)

                    this.$set(this.$root.basket, product.id, existing)
                },

                $removeFromBasket(product) {
                    let existing = _.get(this.$root.basket, product.id, { ...product, qty: 1 })

                    _.set(existing, 'qty', existing.qty - 1)

                    if (existing.qty <= 0) {
                        return this.$delete(this.$root.basket, product.id)
                    }

                    this.$set(this.$root.basket, product.id, existing)
                },
            }
        }
    }

    render() {
        Vue.mixin(this.mixin())

        this.renderer = new Vue({
            el: '#app',
            render: h => h(App),
            router: router(routes),

            data: {
                basket: {},
                user: window.App.user,
            },

            watch: {
                basket: {
                    deep: true,
                    handler(data) {
                        localStorage.setItem('basket', JSON.stringify(data))
                    }
                }
            },

            created() {
                let saved = localStorage.getItem('basket')

                if (saved) {
                    this.basket = JSON.parse(saved)
                }
            }
        })
    }

    boot() {
        this.render()
    }
}
