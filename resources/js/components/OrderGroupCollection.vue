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
        },

        created() {
            this.fetch()

            Echo.channel('orders')
                .listen('OrderPaid', event => {
                    if (event.order.collection) {
                        this.orders.unshift(event.order)
                    }
                })
                .listen('OrdersFulfilled', ({ orders }) => {
                    for (let order of orders) {
                        this.$delete(this.orders, _.findIndex(this.orders, ({ id }) => id === order.id))
                    }
                })
        },
    }
</script>
