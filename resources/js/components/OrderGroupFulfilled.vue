<template>
    <order-group title="Fulfilled">
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
                const { data } = await ajax.get(`/api/orders/fulfilled/${this.page}`)

                this.orders = data
            },

            async loadMoreOrders() {
                this.page++

                const { data } = await ajax.get(`/api/orders/fulfilled/${this.page}`)

                this.orders = this.orders.concat(data)
            },
        },

        created() {
            this.fetch()

            Echo.channel('orders')
                .listen('OrderPaid', ({ order }) => {
                    this.$delete(this.orders, _.findIndex(this.orders, ({ id }) => id === order.id))
                })
                .listen('OrdersFulfilled', ({ orders }) => {
                    for (let order of orders) {
                        this.orders.unshift(order)
                    }
                })
        },
    }
</script>
