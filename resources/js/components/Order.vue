<template>
    <div>
        <div @click="expanded = ! expanded" :class="{ 'block lg:hidden': expanded, 'hidden': ! expanded }" class="fixed inset-0 bg-blue-500 opacity-25 z-20"></div>

        <div :class="{
            'my-4': ! expanded,
            [`border-t-2 border-${order.group}-400`]: order.group,
            'fixed lg:relative bottom-0 left-0 right-0 z-40 shadow-lg max-h-order lg:max-h-auto rounded-t-lg lg:rounded': expanded,
        }" class="order flex flex-wrap w-full items-center sm:my-4 bg-white shadow sm:rounded overflow-auto">
            <div @click="expanded = ! expanded" :class="expanded ? 'sticky top-0 border-b border-gray-200' : 'relative'"
                class="bg-white z-10 inline-flex flex-1 items-start px-3 py-4 2xl:p-6 cursor-pointer select-none">
                <icon v-if="! order.charged_at && ! order.delivered_at" name="shopping-cart" class="hidden xl:inline-block size-5 text-gray-300 mr-4 mt-1" />

                <div v-if="order.charged_at && ! order.delivered_at" class="absolute left-0 top-0 bottom-0 flex flex-col items-center justify-center pl-2 2xl:pl-5">
                    <icon @click.native.stop.prevent="increaseOrder" name="cheveron-up"
                        class="size-5 text-blue-200 hover:text-blue-500 cursor-pointer select-none transform hover:scale-110 duration-200 ease-in-out" />

                    <span>{{ order.order }}</span>

                    <icon @click.native.stop.prevent="decreaseOrder" name="cheveron-down"
                        class="size-5 text-blue-200 hover:text-blue-500 transform hover:scale-110 duration-200 ease-in-out cursor-pointer select-none" />
                </div>

                <div :class="(order.charged_at && ! order.delivered_at) ? 'ml-6 2xl:ml-8' : ''" class="flex-1 inline-flex flex-col text-sm 2xl:text-base">
                    <span class="font-bold truncate">
                        {{ order.metadata.shipping.name }}
                        <template v-if="order.charged_at && ! order.delivered_at">
                            &mdash;
                            <span class="text-xs font-normal">
                                {{ order.metadata.shipping.phone }}
                            </span>
                        </template>
                    </span>

                    <div v-if="order.charged_at && ! order.delivered_at" class="inline-flex flex-row items-center text-xs 2xl:text-sm text-gray-700">
                        <span>
                            {{ order.metadata.shipping.address.line1 }},
                            {{ order.metadata.shipping.address.line2 }},
                            {{ order.metadata.shipping.address.postal_code }}
                        </span>
                    </div>

                    <div v-else class="inline-flex flex-row items-center text-xs 2xl:text-sm text-gray-600">
                        <span v-if="order.delivered_at" class="inline-block">
                            Delivered {{ order.delivered_at | fromNow }}
                        </span>

                        <span v-else class="inline-block">
                            {{ order.created_at | fromNow }}
                        </span>

                        <span class="inline-block mx-2">&middot;</span>

                        <span v-if="order.delivered_at">
                            Order took {{ orderRuntime }}
                        </span>

                        <span v-else>{{ order.metadata.shipping.phone }}</span>
                    </div>
                </div>

                <template v-if="order.picking_at && ! order.delivered_at">
                    <div v-if="! order.charged_at" class="whitespace-no-wrap inline-flex items-center justify-center mr-2 flex-col ml-4 text-right" style="max-height: 38px">
                        <span @click.stop.prevent="increaseBags" class="transform hover:scale-110 duration-200 ease-in-out cursor-pointer select-none">
                            <icon name="cheveron-up" class="size-5 text-blue-200 hover:text-blue-500" />
                        </span>

                        <span @click.stop.prevent="decreaseBags" class="transform hover:scale-110 duration-200 ease-in-out cursor-pointer select-none">
                            <icon name="cheveron-down" class="size-5 text-blue-200 hover:text-blue-500" />
                        </span>
                    </div>

                    <div class="whitespace-no-wrap inline-flex flex-col text-right font-number">
                        <span class="text-xs text-gray-600"># of bags</span>
                        <span class="font-bold text-sm 2xl:text-base">{{ order.bags }} bags</span>
                    </div>
                </template>

                <template v-else>
                    <div class="whitespace-no-wrap inline-flex flex-col text-right font-number ml-4">
                        <span class="text-xs text-gray-600">
                            {{ order.charged_at ? 'Total paid' : 'Total to pay' }}
                        </span>

                        <span class="font-bold text-sm 2xl:text-base">{{ order.total | currency }}</span>
                    </div>
                </template>

                <div v-if="order.charged_at && ! order.delivered_at && ! order.collection" class="whitespace-no-wrap inline-flex flex-wrap items-center justify-end ml-4" style="width: 36px;">
                    <div v-for="chunk in chunkedGroups" class="flex items-center justify-end">
                        <span v-for="group in chunk" @click.prevent.stop="assignToGroup(group)"
                            :class="{ [`bg-${group}-400`]: order.group === group, [`border-${group}-400 hover:bg-${group}-400`]: true }"
                            class="m-px w-4 2xl:w-5 h-4 2xl:h-5 border-4 rounded-full transform hover:scale-110 duration-200 ease-in-out transition-all">
                        </span>
                    </div>
                </div>

                <template v-if="! order.charged_at">
                    <template v-if="order.picking_at">
                        <div v-if="! pickingFinished"
                            class="bg-blue-200 text-white rounded-full w-10 h-10 ml-4 inline-flex flex-wrap items-center justify-center">
                            <icon name="three-dots" class="size-5 fill-current" />
                        </div>

                        <div v-if="pickingFinished"
                            class="bg-green-400 text-white rounded-full w-10 h-10 ml-4 inline-flex flex-wrap items-center justify-center">
                            <icon name="checkmark" class="size-5 fill-current" />
                        </div>
                    </template>

                    <div v-else @click.stop.prevent="startPicking" class="cursor-pointer select-none bg-blue-500 text-white rounded-full w-10 h-10 ml-4 inline-flex flex-wrap items-center justify-center">
                        <icon name="hand-pointer" class="size-5 fill-current" />
                    </div>
                </template>
            </div>

            <div v-show="expanded" class="block w-full">
                <div v-if="order.collection" class="block w-full p-4">
                    <div class="block w-full p-4 rounded border border-blue-300 bg-blue-100 select-none transition-all duration-300 ease-in-out">
                        <p class="text-blue-800 font-bold pb-2">Click & Collect</p>
                        <p class="text-sm">This order is for collection. Make sure to contact the customer when their order is ready to be collected.</p>
                    </div>
                </div>

                <div class="flex flex-wrap justify-between items-start w-full p-4 2xl:p-6 border-b border-gray-200">
                    <div class="inline-flex w-1/2 flex-col text-xs 2xl:text-sm">
                        <span class="font-bold">Address</span>
                        <span>{{ order.metadata.shipping.address.line1 }}</span>
                        <span>{{ order.metadata.shipping.address.line2 }}</span>
                        <span>{{ order.metadata.shipping.address.city }}, {{ order.metadata.shipping.address.country }}</span>
                        <span>{{ order.metadata.shipping.address.postal_code }}</span>
                    </div>

                    <div class="inline-flex w-1/2 flex-col text-xs 2xl:text-sm">
                        <span class="font-bold">Contact Info</span>
                        <span>{{ order.metadata.shipping.name }}</span>
                        <a :href="`tel:${order.metadata.shipping.phone}`" class="underline">{{ order.metadata.shipping.phone }}</a>
                        <a :href="`mailto:${order.metadata.email}`" class="underline">{{ order.metadata.email }}</a>
                    </div>

                    <div v-if="order.comment" class="inline-flex w-full flex-col text-xs 2xl:text-sm mt-4">
                        <span class="font-bold">Additional Comments</span>
                        <span>{{ order.comment }}</span>
                    </div>

                    <div class="inline-flex w-full flex-col text-sm mt-4">
                        <div class="text-left select-none">
                            <template v-if="order.charged_at">
                                <span class="text-green-500 mr-4">Paid &checkmark;</span>
                            </template>

                            <template v-else-if="order.picking_at">
                                <template v-if="order.payment_method_id">
                                    <button @click="takePayment" :disabled="processing" class="px-4 mr-2 btn-white">
                                        Take Payment
                                    </button>

                                    <button @click="toggleDeliveryFee" :disabled="processing" class="px-4 mr-2 btn-white">
                                        {{ order.free_delivery ? 'Add Delivery Charge' : 'Free Delivery' }}
                                    </button>
                                </template>

                                <template v-else>
                                    <div class="block w-full p-4 rounded border border-yellow-300 bg-yellow-100 select-none transition-all duration-300 ease-in-out">
                                        <p class="text-yellow-800 font-bold pb-2">Missing Payment Method</p>
                                        <p class="text-sm">This order is missing a payment method. You can take payment manually through Stripe, and then confirm the payment has been received here.</p>

                                        <div class="flex flex-wrap items-center w-full mt-4">
                                            <button class="btn-white text-2xs p-0">
                                                <a :href="`https://dashboard.stripe.com/customers/${order.customer_id}`" target="_blank" class="inline-block px-2 py-1">
                                                    Take Payment
                                                </a>
                                            </button>

                                            <span class="flex-1 px-4 font-bold text-right">then confirm &rarr;</span>

                                            <button @click="confirmPayment" :disabled="processing" class="px-2 btn-white text-2xs py-1">
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                </template>
                            </template>

                            <button v-if="order.delivered_at" @click="markAsUndelivered" class="px-3 btn-white">
                                Un-{{ order.collection ? 'Collected' : 'Delivered' }} &cross;
                            </button>

                            <button v-else-if="order.charged_at" @click="markAsDelivered" class="px-3 btn-white">
                                {{ order.collection ? 'Collected' : 'Delivered' }} &checkmark;
                            </button>
                        </div>

                        <div class="inline-flex text-xs justify-start text-gray-500 mt-2">
                            <span class="pr-4">Order ID: {{ order.id }}</span>
                            <span>{{ order.customer_id }}</span>
                        </div>
                    </div>
                </div>

                <div class="block w-full p-4 2xl:p-6 text-xs 2xl:text-sm overflow-x-auto">
                    <div class="flex items-center w-full mb-2">
                        <span class="flex-1 font-bold">Order Items</span>
                        <span @click="editable = ! editable" class="cursor-pointer select-none text-blue-500">
                            {{ editable ? 'Done' : 'Remove Items...' }}
                        </span>
                    </div>

                    <div v-for="item in order.items" class="flex w-full items-center text-xs 2xl:text-sm mb-1 whitespace-no-wrap overflow-visible">
                        <input type="checkbox" :checked="!! item.picked_at" @input="markAsPicked(item)" class="inline-block mr-2" />

                        <span class="inline-block text-left min-w-1/2 mr-2 truncate">{{ item.product.prodTitle }}</span>
                        <span class="inline-block text-left w-12">{{ item.product.prodUnitSize }}</span>

                        <div v-show="editable" class="flex-1 inline-flex items-center justify-end">
                            <span @click="removeItem(item)" class="text-blue-500 cursor-pointer select-none">
                                Remove
                            </span>
                        </div>

                        <div v-show="! editable" class="flex-1 inline-flex items-center justify-end">
                            <input v-if="! order.charged_at" v-model.number="item.quantity" @focus="highlightInput"
                                @input="updateItemQuantity(item)" type="number"
                                placeholder="Quantity" class="font-number text-right border rounded px-1 w-8" />

                            <span v-else class="font-number text-right w-8">{{ item.quantity }}</span>

                            <span class="font-number text-right ml-1 mr-2">&times;</span>
                            <span class="font-number text-right mr-1">&pound;</span>

                            <input v-if="! order.charged_at" :value="item.amount / 100" @focus="highlightInput"
                                @input="updateItemAmount(item, $event.target.value)" type="number"
                                placeholder="Amount" class="font-number text-right border rounded px-1 w-12" />

                            <span v-else class="font-number text-right w-12">{{ item.amount | currency }}</span>
                        </div>
                    </div>

                    <div v-if="! order.charged_at" class="flex flex-wrap w-full items-center text-sm mt-3">
                        <input v-model="searchQuery" placeholder="Search for a product to add (title or id)"
                            class="border rounded px-1 focus:border-gray-400 w-full mb-2" />

                        <div v-for="product in searchResults" :class="{ 'opacity-50 pointer-events-none select-none': processing }"
                            class="inline-flex w-full items-center mb-1">
                            <span @click.stop.prevent="addProductToOrder(product.id)" class="flex-1 text-left mr-4 underline cursor-pointer">
                                {{ product.title }}
                            </span>

                            <div class="inline-flex items-center justify-end">
                                <span class="inline-block text-left w-12 mr-4">{{ product.unit_size }}</span>
                                <span class="font-number text-right w-12">{{ product.price | currency }}</span>
                            </div>
                        </div>
                    </div>

                    <div class="flex w-full items-center text-xs 2xl:text-sm mb-1 mt-2 justify-end">
                        <span class="font-bold">Sub-total</span>
                        <span class="w-12 ml-4 text-right font-number">{{ order.subTotal | currency }}</span>
                    </div>

                    <div class="flex w-full items-center text-xs 2xl:text-sm mb-1 justify-end">
                        <span class="font-bold">Delivery fee</span>
                        <span class="w-12 ml-4 text-right font-number">{{ order.deliveryFee | currency }}</span>
                    </div>

                    <div class="flex w-full items-center text-xs 2xl:text-sm justify-end">
                        <span class="font-bold">Total</span>
                        <span class="w-12 ml-4 text-right font-number">{{ order.total | currency }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            resource: Object,
        },

        data() {
            return {
                socket: null,
                editable: false,
                expanded: false,
                searchResults: [],
                searchQuery: null,
                processing: false,
                order: this.resource,

                submitSearch: _.debounce(async keyword => {
                    const { data } = await ajax.post('/api/search?limit=15', { keyword })

                    this.searchResults = this.searchQuery ? data : []
                }, 150),
            }
        },

        watch: {
            resource(value) {
                this.order = value
            },

            searchQuery(query) {
                if (! query) {
                    return this.searchResults = []
                }

                this.submitSearch(query)
            },
        },

        computed: {
            pickingFinished() {
                const picked = _.filter(this.order.items, item => !! item.picked_at)

                return picked.length === this.order.items.length
            },


            chunkedGroups() {
                return _.chunk(['red', 'green', 'blue', 'orange'], 2)
            },

            orderRuntime() {
                const start = moment(this.order.created_at)
                const end = moment(this.order.delivered_at)

                return start.from(end, true)
            },
        },

        methods: {
            async toggleDeliveryFee() {
                if (this.order.free_delivery) {
                    await ajax.put(this.endpoint('delivery-fee'))
                    this.fetch(['total', 'subTotal', 'deliveryFee'])
                    this.order.free_delivery = false
                } else {
                    await ajax.delete(this.endpoint('delivery-fee'))
                    this.fetch(['total', 'subTotal', 'deliveryFee'])
                    this.order.free_delivery = true
                }
            },

            highlightInput(event) {
                event.target.setSelectionRange(0, event.target.value.length)
            },

            sortItems() {
                this.order.items = _.sortBy(this.order.items, item => item.product.prodCatID)
            },

            async removeItem(item) {
                await ajax.delete(`/api/item/${item.id}`)

                this.$delete(this.order.items, _.findIndex(this.order.items, ({ id }) => item.id === id))

                this.fetch(['total', 'subTotal', 'deliveryFee'])
            },

            async markAsPicked(item) {
                if (item.picked_at) {
                    ajax.delete(`/api/item/${item.id}/picked`)
                    item.picked_at = null
                } else {
                    ajax.put(`/api/item/${item.id}/picked`)
                    item.picked_at = moment().format('YYYY-MM-DD HH:mm:ss')
                }
            },

            async fetch(fields = []) {
                const { data } = await ajax.get(`/api/order/${this.order.id}`)

                if (! fields.length) {
                    this.order = data
                    return this.sortItems()
                }

                for (let field of fields) {
                    this.$set(this.order, field, _.get(data, field))
                }

                this.sortItems()
            },

            endpoint(uri) {
                return `/api/order/${this.order.id}/${uri}`
            },

            async addProductToOrder(productId) {
                if (this.processing) return

                this.processing = true

                await ajax.post(this.endpoint('items'), { productId })

                this.searchResults = []
                this.searchQuery = null

                await this.fetch()

                this.processing = false
            },

            async updateItemAmount(item, amount) {
                item.amount = amount ? Number(amount) * 100 : 0

                await ajax.post(`/api/item/${item.id}/amount`, {
                    amount: item.amount,
                })

                this.fetch(['total', 'subTotal', 'deliveryFee'])
            },

            async updateItemQuantity(item) {
                await ajax.post(`/api/item/${item.id}/quantity`, {
                    quantity: item.quantity || 0,
                })

                this.fetch(['total', 'subTotal', 'deliveryFee'])
            },

            async confirmPayment() {
                await ajax.put(this.endpoint('confirm-payment'))

                this.fetch(['charged_at'])
            },

            assignToGroup(group) {
                ajax.post(this.endpoint('group'), { group })

                this.order.group = group
            },

            async startPicking() {
                const { data: { picking_at } } = await ajax.put(this.endpoint('picking'))

                this.order.picking_at = picking_at
            },

            async takePayment() {
                this.processing = true

                await ajax.post(this.endpoint('charge'))

                this.processing = false
            },

            async markAsDelivered() {
                const { data: { delivered_at } } = await ajax.put(this.endpoint('delivered'))

                this.order.delivered_at = delivered_at
            },

            async markAsUndelivered() {
                await ajax.delete(this.endpoint('delivered'))

                this.order.delivered_at = null
            },

            increaseBags() {
                ajax.put(this.endpoint('bags'))

                this.order.bags++
            },

            decreaseBags() {
                if (this.order.bags === 0) {
                    return
                }

                ajax.delete(this.endpoint('bags'))

                this.order.bags--
            },

            increaseOrder() {
                ajax.put(this.endpoint('order'))

                this.order.order++

                this.$emit('reordered')
            },

            decreaseOrder() {
                if (this.order.order === 0) {
                    return
                }

                ajax.delete(this.endpoint('order'))

                this.order.order--

                this.$emit('reordered')
            },
        },

        created() {
            this.sortItems()
        },
    }
</script>
