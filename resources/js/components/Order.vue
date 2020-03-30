<template>
    <div class="flex flex-wrap w-full items-center my-4 bg-white shadow rounded p-6">
        <div class="inline-flex flex-1 items-center">
            <span class="mr-6">{{ order.customer.shipping.name }}</span>
            <span class="mr-6">{{ order.customer.shipping.phone }}</span>

            <span @click="expanded = ! expanded" class="underline cursor-pointer text-gray-600 select-none">See Order</span>
            <span class="flex-1 text-right font-number">Total to pay {{ order.total | currency }}</span>
        </div>

        <div v-show="expanded" class="block w-full border-t mt-6 pt-6">
            <div class="flex w-full mb-6">
                <div class="inline-flex flex-shrink-0 flex-col">
                    <span class="font-bold">Shipping Address</span>
                    <span>{{ order.customer.shipping.address.line1 }}</span>
                    <span>{{ order.customer.shipping.address.line2 }}</span>
                    <span>{{ order.customer.shipping.address.city }}, {{ order.customer.shipping.address.country }}</span>
                    <span>{{ order.customer.shipping.address.postal_code }}</span>
                </div>

                <div class="flex-1 text-right select-none">
                    <button @click="charge" :disabled="charging || order.charged_at" class="px-4 ml-2">
                        {{ charging ? 'Please Wait' : order.charged_at ? 'Payment Received' : 'Take Payment' }}
                    </button>

                    <button @click="markAsDelivered" :disabled="order.delivered_at" class="px-4 ml-2">
                        Delivered
                    </button>
                </div>
            </div>

            <div v-for="item in order.items" :key="`orderitem-${item.id}`" class="flex w-full items-center text-sm mb-1">
                <span class="flex-1 text-left truncate">{{ item.product.title }}</span>

                <button @click="decreaseQty(item)" :disabled="amending" class="btn-sm mr-4">-</button>

                <span class="font-number text-right mr-4">
                    {{ item.quantity }}
                    &times;
                </span>

                <input v-model.number="item.amount / 100" placeholder="Amount" class="font-number text-right border rounded px-1 w-16" />
                <!--<span class="font-number text-right">-->
                <!--    {{ item.amount | currency }}-->
                <!--</span>-->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            order: Object,
        },

        data() {
            return {
                charging: false,
                expanded: false,
                amending: false,
            }
        },

        methods: {
            async charge() {
                this.charging = true

                await ajax.post(`/api/order/${this.order.id}/charge`)

                this.charging = false

                this.$emit('fetch')
            },

            async markAsDelivered() {
                await ajax.post(`/api/order/${this.order.id}/delivered`)

                this.expanded = false
                this.$emit('fetch')
            },

            async decreaseQty(item) {
                if (this.amending) return

                this.amending = true

                await ajax.delete(`/api/order/${this.order.id}/${item.id}`)

                this.$emit('fetch')
                this.amending = false
            },
        },
    }
</script>
