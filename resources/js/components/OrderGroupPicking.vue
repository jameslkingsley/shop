<template>
    <order-group title="Being picked">
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
                const { data } = await ajax.get('/api/orders/picking')

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
                .listen('OrderPicking', async event => this.orders.unshift(await this.fetchOrder(event.orderId)))
                .listen('OrderPaid', event => {
                    this.$delete(this.orders, _.findIndex(this.orders, ({ id }) => id === event.orderId))
                })
        },
    }
</script>
