<template>
    <div>
        <header v-if="! adminDashboard" class="fixed py-4 top-0 left-0 right-0 block bg-blue-500 text-white px-6 md:px-8 text-lg z-40">
            <nav class="flex items-center justify-between w-full h-full">
                <span @click="toggleMenu" class="inline-flex items-center mr-6 cursor-pointer select-none">
                    <icon name="menu" width="20" height="20" class="text-white" />
                </span>

                <router-link to="/" class="inline-flex items-center mr-4 sm:mr-6 cursor-pointer select-none">
                    <icon name="home" width="20" height="20" class="text-white" />
                </router-link>

                <div class="hidden sm:flex flex-col">
                    <router-link to="/" class="text-xl font-bold tracking-wide">
                        Shortlanesend Store
                    </router-link>

                    <span class="text-blue-200 text-sm">
                        Call us on <strong class="text-white">01872 275102</strong>
                    </span>
                </div>

                <div class="flex-1 inline-flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32">
                    <input @keyup.enter="submitSearch" placeholder="Search" class="px-4 py-2 text-sm sm:text-base rounded bg-white text-black shadow focus:shadow-md w-full" />
                </div>

                <div class="inline-flex items-center justify-end xl:flex-1">
                    <span @click="basketVisible = ! basketVisible" class="inline-flex items-center text-lg font-bold cursor-pointer select-none">
                        <icon name="shopping-cart" width="20" height="20" class="text-white mr-2" />
                        <span>{{ subTotal | currency }}</span>
                    </span>
                </div>
            </nav>
        </header>

        <main :class="{ 'w-full py-16 sm:py-20': ! adminDashboard }">
            <div v-if="isShutdown && ! adminDashboard"
                class="block md:w-1/2 mx-auto mt-8 z-40 sticky border border-red-500 rounded bg-red-100 p-4" style="top: 6rem">
                Due to a high demand of orders we have temporarily put a hold on new orders. We're sorry for the inconvenience, please try again tomorrow.
            </div>

            <router-view></router-view>
        </main>

        <template v-if="! adminDashboard">
            <div v-show="basketVisible || $root.menuVisible" @click="closeSidebars" class="fixed inset-0 z-40 bg-blue-500 opacity-25"></div>

            <div v-show="basketVisible" class="fixed overflow-y-auto z-50 flex flex-col right-0 top-0 bottom-0 w-full sm:w-basket transition-all duration-200 ease-in-out">
                <div class="flex flex-1 flex-col bg-background-lighter shadow-lg">
                    <span class="flex items-center text-gray-900 font-bold text-xl px-6 py-4 bg-white border-b border-gray-200">
                        <icon @click.native="basketVisible = false" name="close" width="20" height="20" class="text-black mr-4 cursor-pointer select-none" />
                        <span>Your Basket</span>
                    </span>

                    <div class="flex-1 bg-background-lighter p-4 xl:p-6 overflow-y-auto">
                        <div v-for="(product, id) in $root.basket" :key="`basket-${id}`"
                            class="flex w-full items-center text-sm mb-1">
                            <span class="flex-1 text-left truncate" :title="product.title">{{ product.title }}</span>

                            <span class="font-number text-right mx-4">
                                {{ product.qty }}
                                &times;
                            </span>

                            <span class="font-number text-right">
                                {{ product.price | currency }}
                            </span>

                            <button @click="$removeFromBasket(product)" class="btn-sm ml-4 mr-1">-</button>
                            <button @click="$addToBasket(product)" class="btn-sm">+</button>
                        </div>
                    </div>

                    <div class="flex flex-shrink-0 px-4 xl:px-6 w-full text-sm mb-2">
                        <span class="flex-1 text-left text-gray-700 font-semibold">Sub-total</span>
                        <span class="flex-1 text-right font-number text-black">{{ subTotal | currency }}</span>
                    </div>

                    <div class="flex flex-shrink-0 px-4 xl:px-6 w-full text-sm">
                        <span class="flex-1 text-left text-gray-700 font-semibold">Delivery</span>
                        <span class="flex-1 text-right font-number text-black">{{ deliveryFee | currency }}</span>
                    </div>

                    <div class="block flex-shrink-0 p-4 xl:p-6 mt-4 xl:mt-6 border-t border-gray-200 w-full bg-white rounded-b-lg transition-all duration-300 ease-in-out overflow-hidden">
                        <div class="flex items-end w-full">
                            <div class="flex-1 text-left">
                                <span class="block w-full font-bold">Total to pay</span>
                                <span class="block w-full text-xs text-gray-600">You will be charged on delivery.</span>
                            </div>

                            <span class="flex-shrink-0 text-right font-number text-xl xl:text-2xl font-extrabold">{{ total | currency }}</span>
                        </div>

                        <div v-if="isShutdown" class="block w-full mt-4 border border-red-500 rounded bg-red-100 p-4">
                            Due to a high demand of orders we have temporarily put a hold on new orders. We're sorry for the inconvenience, please try again tomorrow.
                        </div>

                        <template v-else>
                            <div class="block w-full mt-4">
                                <label>
                                    <textarea v-model="form.comment" placeholder="Additional comments, delivery instructions etc." class="w-full text-sm px-2 py-1 max-w-full" />
                                </label>
                            </div>

                            <div class="flex items-center w-full mt-4 rounded-md overflow-hidden text-center bg-blue-100 text-blue-500">
                                <div @click="form.collection = false" :class="{ 'bg-blue-500 text-white': ! form.collection }"
                                    class="flex-1 cursor-pointer select-none px-6 py-2 font-bold">
                                    Home Delivery
                                </div>

                                <div @click="form.collection = true" :class="{ 'bg-blue-500 text-white': form.collection }"
                                    class="flex-1 cursor-pointer select-none px-6 py-2 font-bold">
                                    Click & Collect
                                </div>
                            </div>

                            <div v-show="isCheckingOut" class="block w-full mt-4 select-none transition-all duration-300 ease-in-out">
                                <label :class="{ 'error': errors.telephone }">
                                    <input ref="telephoneInput" v-model="form.telephone" required type="tel" name="telephone" placeholder="Mobile or home number" class="text-center" />
                                    <span v-show="errors.telephone" v-text="errors.telephone"></span>
                                    <p class="text-sm mt-2 text-gray-700">Please enter your phone number above.<br />We will contact you to confirm {{ form.collection ? 'collection' : 'delivery' }} of your items.</p>
                                </label>
                            </div>

                            <div v-if="isAdmin && isCheckingOut" class="block w-full p-4 rounded border border-yellow-300 bg-yellow-100 mt-4 select-none transition-all duration-300 ease-in-out">
                                <p class="text-yellow-800 font-bold pb-2">You are logged in as admin.</p>
                                <p class="text-sm">You can bypass the checkout process by entering a Stripe customer ID below.</p>

                                <label class="mt-4" :class="{ 'error': errors.customer_id }">
                                    <span>Stripe Customer ID</span>
                                    <input v-model="form.customer_id" placeholder="cus_H52s8qZ2UrqKLt" />
                                    <span v-show="errors.customer_id" v-text="errors.customer_id"></span>
                                </label>
                            </div>
                        </template>
                    </div>
                </div>

                <button @click="checkout" :disabled="placeOrderDisabled" class="w-full btn-primary py-4 text-lg rounded-none">
                    {{ processing ? 'Please Wait' : isCheckingOut ? 'Place Order &rarr;' : 'Checkout' }}
                </button>
            </div>
        </template>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                errors: {},
                processing: false,
                isCheckingOut: false,
                basketVisible: false,
                isShutdown: App.isShutdown,
                isAdmin: App.adminLoggedIn,
                stripe: Stripe(App.stripeToken),
                form: {
                    comment: null,
                    telephone: null,
                    customer_id: null,
                    collection: false,
                },
            }
        },

        computed: {
            adminDashboard() {
                return this.$route.meta.admin
            },

            placeOrderDisabled() {
                if (this.isShutdown || this.processing) {
                    return true
                }

                if (this.isAdmin) {
                    return ! this.subTotal
                }

                return (this.isCheckingOut && ! this.form.telephone) || ! this.subTotal
            },

            subTotal() {
                return _.sum(
                    _.values(
                        _.mapValues(this.$root.basket, ({ qty, price }) => {
                            return qty * price
                        }),
                    ),
                )
            },

            deliveryFee() {
                if (this.form.collection) return 0

                if (this.subTotal >= 30 * 100) return 0

                if (this.subTotal >= 20 * 100) return 100

                return 200
            },

            total() {
                return this.subTotal + this.deliveryFee
            },
        },

        methods: {
            closeSidebars() {
                this.basketVisible = false
                this.$root.menuVisible = false
            },

            toggleMenu() {
                this.$root.menuVisible = ! this.$root.menuVisible
            },

            async placeOrder() {
                try {
                    this.processing = true

                    const response = await ajax.post('/api/order', {
                        basket: this.$root.basket, ...this.form,
                    })

                    this.processing = false

                    if (response.status === 204) {
                        this.isCheckingOut = false
                        this.form.comment = null
                        this.form.telephone = null
                        this.form.customer_id = null
                        return this.$clearBasket()
                    }

                    this.stripe.redirectToCheckout({ sessionId: response.data.sessionId })
                } catch ({ response }) {
                    console.error(response.data.message)
                    this.processing = false
                    this.errors = _.mapValues(response.data.errors, e => _.first(e))
                }
            },

            checkout() {
                if (this.isCheckingOut) {
                    return this.placeOrder()
                }

                this.isCheckingOut = true

                setTimeout(() => this.$refs.telephoneInput.focus(), 150)
            },

            submitSearch(event) {
                this.$router.push('/search?keyword=' + event.target.value)
            },
        },
    }
</script>

<style scoped lang="scss">
    .-mr-basket {
        margin-right: -24rem;
    }

    .-mb-checkout {
        margin-bottom: -7.5rem;
    }
</style>
