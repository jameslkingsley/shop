<template>
    <div v-if="orders.length">
        <div :class="{ 'opacity-50 pointer-events-none select-none': processing }" class="relative block w-full mb-16">
            <order @reordered="reorderOrders" v-for="order in orders" :key="order.id" :resource="order" />

            <div v-if="group" :class="`bg-${group}-200`" class="absolute hidden sm:flex flex-col items-center justify-center right-0 top-0 bottom-0 w-1 -mr-4 rounded-full">
                <span @click="markAllAsDelivered" :class="`bg-${group}-400 active:bg-${group}-500 flex items-center justify-center rounded-full w-6 h-6 cursor-pointer select-none transition-all transform hover:scale-110 ease-in-out duration-200`">
                    <icon name="checkmark" class="size-3 text-white" />
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    import Order from './Order'

    export default {
        components: { Order },

        props: {
            group: { type: String, default: null },
        },

        data() {
            return {
                orders: [],
                processing: false,
            }
        },

        methods: {
            reorderOrders() {
                this.orders = _.sortBy(this.orders, 'order')
            },

            async markAllAsDelivered() {
                if (! this.group) return

                this.processing = true

                await ajax.put(`/api/orders/group/${this.group}/delivered`)

                this.processing = false
            },

            async fetch() {
                const { data } = await ajax.get(`/api/orders/group/${this.group || 'none'}`)

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

                    if (this.group === order.group && ! order.collection) {
                        this.orders.unshift(order)
                        this.reorderOrders()
                    }
                })
                .listen('OrderGroupAssigned', async ({ orderId, previousGroup }) => {
                    const order = await this.fetchOrder(orderId)

                    if (previousGroup === this.group && order.group !== this.group) {
                        this.$delete(this.orders, _.findIndex(this.orders, ({ id }) => id === order.id))
                        return this.reorderOrders()
                    }

                    if (order.group === this.group) {
                        this.orders.unshift(order)
                        this.reorderOrders()
                    }
                })
                .listen('OrdersFulfilled', ({ orders }) => {
                    for (let orderId of orders) {
                        this.$delete(this.orders, _.findIndex(this.orders, ({ id }) => id === orderId))
                    }

                    this.reorderOrders()
                })
        },
    }
</script>
