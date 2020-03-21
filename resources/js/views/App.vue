<template>
    <div class="container mx-auto py-8">
        <header class="sticky block w-full bg-blue-500 text-white sm:rounded-lg py-6 px-8 text-lg z-50">
            <nav class="flex items-center justify-between w-full font-bold">
                <router-link to="/">
                    Shortlanesend Store
                </router-link>

                <div class="flex items-center justify-end">
                    <router-link to="/checkout" class="mr-16 bg-white px-4 py-2 rounded shadow text-blue-500">
                        Book Delivery
                    </router-link>

                    <div class="flex flex-col text-right">
                        <span class="text-xs opacity-75">Basket Total</span>
                        <span class="font-number">{{ subTotal | currency }}</span>
                    </div>
                </div>
            </nav>
        </header>

        <main class="w-full pl-8">
            <router-view></router-view>
        </main>

        <div class="fixed flex flex-col right-0 top-0 bottom-0 bg-white shadow-md w-basket flex-shrink-0 p-6 transition-all duration-200 ease-in-out"
            :class="{ '-mr-basket': isCheckout }">
            <div class="flex-1">
                <span class="block text-gray-900 font-bold mb-4">Your Basket</span>

                <div v-for="(product, id) in $root.basket" :key="`basket-${id}`"
                    class="flex w-full items-center text-sm mb-1">
                    <span class="flex-1 text-left truncate">{{ product.title }}</span>

                    <span class="font-number text-right mr-4">
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

            <div class="flex w-full text-lg">
                <span class="flex-1 text-left">Sub-total</span>
                <span class="flex-1 text-right font-number">{{ subTotal | currency }}</span>
            </div>

            <div class="flex w-full text-lg">
                <span class="flex-1 text-left">Delivery</span>
                <span class="flex-1 text-right font-number">{{ deliveryFee | currency }}</span>
            </div>

            <div class="flex w-full text-2xl font-bold">
                <span class="flex-1 text-left">Total</span>
                <span class="flex-1 text-right font-number">{{ total | currency }}</span>
            </div>

            <router-link to="/checkout">
                <button class="w-full mt-4 bg-blue-500 text-white py-4 text-lg">Checkout</button>
            </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            isCheckout() {
                return _.startsWith(this.$route.path, '/checkout')
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
                if (this.subTotal >= 40 * 100) return 0

                if (this.subTotal >= 20 * 100) return 200

                return 500
            },

            total() {
                return this.subTotal + this.deliveryFee
            },
        },
    }
</script>

<style scoped lang="scss">
    .-mr-basket {
        margin-right: -24rem;
    }
</style>
