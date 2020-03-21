<template>
    <div class="block w-full p-6">
        <order @fetch="fetch" v-for="order in orders" :key="`order-${order.id}`" :order="order" />
    </div>
</template>

<script>
    import Order from '../components/Order'

    export default {
        components: { Order },

        data() {
            return {
                orders: []
            }
        },

        methods: {
            async fetch() {
                const { data } = await ajax.get('/api/order')

                this.orders = data
            },
        },

        created() {
            this.fetch()
        },
    }
</script>
