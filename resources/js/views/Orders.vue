<template>
    <div class="block w-full p-6">
        <template v-if="loggedIn">
            <template v-if="keys(orders).length">
                <span class="text-3xl block w-full font-bold">Awaiting packing</span>
                <span v-show="! keys(pending).length">No orders available.</span>
                <order @fetch="fetchOne(order.id)" v-for="order in pending" :key="`order-${order.id}`" :order="order" />

                <span class="text-3xl block w-full font-bold mt-16">Out for delivery</span>
                <span v-show="! keys(outForDelivery).length">No orders available.</span>
                <order @fetch="fetchOne(order.id)" v-for="order in outForDelivery" :key="`order-${order.id}`" :order="order" />

                <span class="text-3xl block w-full font-bold mt-16">Fulfilled</span>
                <span v-show="! keys(fulfilled).length">No orders available.</span>
                <order @fetch="fetchOne(order.id)" v-for="order in fulfilled" :key="`order-${order.id}`" :order="order" />
            </template>

            <template v-else>
                <span class="block w-full text-center text-xl">Loading, please wait.</span>
            </template>
        </template>

        <template v-else>
            <div class="w-1/3 bg-white shadow rounded p-6 mx-auto">
                <label>
                    <span>Please enter the administrator password, and hit enter.</span>
                    <input v-model="secret" @keyup.enter="login" type="password" placeholder="Password" />
                </label>
            </div>
        </template>
    </div>
</template>

<script>
    import Order from '../components/Order'

    export default {
        components: { Order },

        data() {
            return {
                orders: {},
                secret: null,
                loggedIn: App.adminLoggedIn,
            }
        },

        computed: {
            pending() {
                return _.pickBy(this.orders, ({ charged_at, delivered_at }) => ! charged_at && ! delivered_at)
            },

            outForDelivery() {
                return _.pickBy(this.orders, ({ charged_at, delivered_at }) => !! charged_at && ! delivered_at)
            },

            fulfilled() {
                return _.pickBy(this.orders, ({ delivered_at }) => !! delivered_at)
            },
        },

        methods: {
            keys(object) {
                return _.keys(object)
            },

            async fetchOne(orderId) {
                const { data } = await ajax.get(`/api/order/${orderId}`)

                this.orders[orderId] = data
            },

            async fetch() {
                const { data } = await ajax.get('/api/order')

                this.orders = data
            },

            async login() {
                try {
                    await ajax.post('/api/login', { secret: this.secret })

                    this.loggedIn = true

                    this.fetch()
                    setInterval(this.fetch, 60000)
                } catch ({ response }) {
                    window.alert(response.data.message)
                }
            },
        },

        created() {
            if (this.loggedIn) {
                this.fetch()
                setInterval(this.fetch, 60000)
            }
        },
    }
</script>
