<template>
    <div class="block w-full lg:w-1/2 xl:w-1/3 mb-16 orders-pending lg:pr-8 xl:pr-16">
        <span class="text-xl block w-full font-bold -mb-2 px-4 sm:px-0">{{ title }}</span>

        <order v-for="order in orders" :key="order.id" :resource="order" />
    </div>
</template>

<script>
    import Order from './Order'

    export default {
        components: { Order },

        props: {
            title: String,
            endpoint: String,
        },

        data() {
            return {
                page: 1,
                orders: [],
            }
        },

        watch: {
            page: 'fetch'
        },

        methods: {
            async fetch() {
                const { data } = await ajax.get(`/api/orders/${this.endpoint}/${this.page}`)

                this.orders = data
            }
        },

        created() {
            this.fetch()
        }
    }
</script>
