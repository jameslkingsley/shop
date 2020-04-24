<template>
    <order-group title="Waiting for collection">
        <order v-for="order in orders" :key="order.id" :resource="order" />
    </order-group>
</template>

<script>
    import Order from './Order'
    import OrderGroup from './OrderGroup'

    export default {
        components: { Order, OrderGroup },

        data() {
            return {
                orders: [],
            }
        },

        methods: {
            async fetch() {
                const { data } = await ajax.get('/api/orders/collection')

                this.orders = data
            },

            async fetchOrder(orderId) {
                const { data } = await ajax.get(`/api/order/${orderId}`)

                return data
            },
        },

        created() {
            this.fetch()

            Echo.channel('orders')
                .listen('OrderPaid', async ({ orderId }) => {
                    let order = await this.fetchOrder(orderId)

                    if (order.collection) {
                        this.orders.unshift(order)
                    }
                })
                .listen('OrdersFulfilled', async ({ orders }) => {
                    for (let orderId of orders) {
                        this.$delete(this.orders, _.findIndex(this.orders, ({ id }) => id === orderId))
                        this.$delete(this.orders, _.findIndex(this.orders, ({ id }) => id === orderId))
                    }
                })
        },
    }
</script>
