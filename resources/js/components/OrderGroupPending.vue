<template>
    <order-group title="Pending">
        <order v-for="order in orders" :key="order.id" :resource="order" />

        <span @click="loadMoreOrders" class="block w-full text-center cursor-pointer select-none underline text-sm">
            Load more orders
        </span>
    </order-group>
</template>

<script>
    import Order from './Order'
    import OrderGroup from './OrderGroup'

    export default {
        components: { Order, OrderGroup },

        data() {
            return {
                page: 1,
                orders: [],
            }
        },

        methods: {
            async fetch() {
                const { data } = await ajax.get(`/api/orders/pending/${this.page}`)

                this.orders = data
            },

            async fetchOrder(orderId) {
                const { data } = await ajax.get(`/api/order/${orderId}`)

                return data
            },

            async loadMoreOrders() {
                this.page++

                const { data } = await ajax.get(`/api/orders/pending/${this.page}`)

                this.orders = this.orders.concat(data)
            },
        },

        created() {
            this.fetch()

            Echo.channel('orders')
                .listen('OrderPlaced', async event => this.orders.unshift(await this.fetchOrder(event.orderId)))
                .listen('OrderPicking', event => {
                    this.$delete(this.orders, _.findIndex(this.orders, ({ id }) => id === event.orderId))
                })
        },
    }
</script>
