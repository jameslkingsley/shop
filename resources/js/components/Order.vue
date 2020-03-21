<template>
    <div class="flex flex-wrap w-full items-center my-4 bg-white shadow rounded p-6">
        <div class="inline-flex flex-1 items-center mr-8">
            <span>{{ order.customer_id }}</span>
            <span @click="expanded = ! expanded" class="ml-6 underline cursor-pointer">See Order</span>
            <span class="flex-1 text-right font-number">{{ order.total | currency }}</span>
        </div>

        <div class="flex-shrink-0 select-none">
            <button @click="charge" :disabled="charging || charged" class="px-4 ml-2">
                {{ charging ? 'Please Wait' : charged ? 'Payment Received' : 'Take Payment' }}
            </button>

            <button @click="markAsDelivered" :disabled="delivered" class="px-4 ml-2">
                Delivered
            </button>
        </div>

        <div v-show="expanded" class="block w-full border-t mt-6 pt-6">
            <div v-for="item in order.items" :key="`orderitem-${item.id}`" class="flex w-full items-center text-sm mb-1">
                <span class="flex-1 text-left truncate">{{ item.product.title }}</span>

                <span class="font-number text-right mr-4">
                    {{ item.quantity }}
                    &times;
                </span>

                <span class="font-number text-right">
                    {{ item.amount | currency }}
                </span>

                <button @click="decreaseQty(item)" :disabled="amending" class="btn-sm ml-4 mr-1">-</button>
                <button @click="increaseQty(item)" :disabled="amending" class="btn-sm">+</button>
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
                charged: !! this.order.charged_at,
                delivered: !! this.order.delivered_at,
            }
        },

        methods: {
            async charge() {
                this.charging = true

                await ajax.post(`/api/order/${this.order.id}/charge`)

                this.charging = false
                this.charged = true
            },

            async markAsDelivered() {
                await ajax.post(`/api/order/${this.order.id}/delivered`)

                this.delivered = true
            },

            async decreaseQty(item) {
                if (this.amending) return

                this.amending = true

                await ajax.delete(`/api/order/${this.order.id}/${item.id}`)

                this.$emit('fetch')
                this.amending = false
            },

            async increaseQty(item) {
                if (this.amending) return

                this.amending = true

                await ajax.put(`/api/order/${this.order.id}/${item.id}`)

                this.$emit('fetch')
                this.amending = false
            },
        },
    }
</script>
