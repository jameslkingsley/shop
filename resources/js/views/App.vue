<template>
    <div>
        <header class="fixed py-4 top-0 left-0 right-0 block bg-blue-500 text-white px-6 md:px-8 text-lg z-40">
            <nav class="flex items-center justify-between w-full h-full">
                <span @click="toggleMenu" class="inline-flex items-center mr-6 cursor-pointer select-none">
                    <icon name="menu" width="20" height="20" class="text-white mr-2" />
                    <span class="sm:hidden font-bold text-sm">Menu</span>
                </span>

                <router-link to="/" class="inline-flex items-center mr-6 cursor-pointer select-none">
                    <icon name="home" width="20" height="20" class="text-white mr-2" />
                    <span class="sm:hidden font-bold text-sm">Home</span>
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
                    <input @keyup.enter="submitSearch" placeholder="Search for a product" class="px-4 py-2 rounded bg-white text-black shadow focus:shadow-md w-full" />
                </div>

                <div class="inline-flex items-center justify-end xl:flex-1">
                    <span @click="basketVisible = ! basketVisible" class="inline-flex items-center text-lg font-bold cursor-pointer select-none">
                        <icon name="shopping-cart" width="20" height="20" class="text-white mr-2" />
                        <span>{{ subTotal | currency }}</span>
                    </span>
                </div>
            </nav>
        </header>

        <main class="w-full py-16 sm:py-20">
            <router-view></router-view>
        </main>

        <div v-show="basketVisible || $root.menuVisible" @click="closeSidebars" class="fixed inset-0 z-10 bg-blue-500 opacity-25"></div>

        <div v-show="basketVisible" class="fixed z-50 flex flex-col right-0 top-0 bottom-0 w-full sm:w-basket transition-all duration-200 ease-in-out">
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

                    <div v-show="isCheckingOut" class="block w-full mt-6 select-none transition-all duration-300 ease-in-out">
                        <label :class="{ 'error': errors.telephone }">
                            <p class="text-sm mb-2 text-gray-700">Please enter your phone number below.<br />We will contact you to confirm delivery of your items.</p>
                            <input ref="telephoneInput" v-model="form.telephone" required type="tel" name="telephone" placeholder="Mobile or home number" class="text-center" />
                            <span v-show="errors.telephone" v-text="errors.telephone"></span>
                        </label>
                    </div>
                </div>
            </div>

            <button @click="checkout" :disabled="(isCheckingOut && ! form.telephone) || ! subTotal" class="w-full btn-primary py-4 text-lg rounded-none">
                {{ isCheckingOut ? 'Place Order &rarr;' : 'Checkout' }}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                errors: {},
                isCheckingOut: false,
                basketVisible: false,
                form: { telephone: null },
                stripe: Stripe(App.stripeToken),
            }
        },

        computed: {
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
                    const { data: { sessionId } } = await ajax.post('/api/order', {
                        basket: this.$root.basket, ...this.form
                    })

                    this.stripe.redirectToCheckout({ sessionId })
                } catch ({ response }) {
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
            }
        }
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
