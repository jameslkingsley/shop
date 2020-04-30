<template>
    <order-group>
        <template #title>
            <div class="flex w-full items-center -mb-2 px-4 sm:px-0">
                <span class="text-xl flex-1 font-bold">
                    Waiting for collection
                </span>

                <div class="inline-flex justify-end items-center ml-4">
                    <a href="/dispatch/collection" target="_blank" class="bg-blue-400 active:bg-blue-500 rounded-full flex items-center justify-center w-6 h-6 cursor-pointer select-none transition-all transform hover:scale-110 ease-in-out duration-200 ml-1">
                        <icon name="printer" class="size-3 text-white fill-current" />
                    </a>
                </div>
            </div>
        </template>

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
