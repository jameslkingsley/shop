<template>
    <div class="pr-8">
        <div class="flex w-full mt-8">
            <div class="w-1/2">
                <span class="block text-3xl w-full font-bold">Payment</span>
                <p class="mb-4 opacity-50">You will be charged on delivery.</p>

                <div class="block w-full bg-white rounded-md shadow-md p-6">
                    <label>
                        <span>Telephone</span>
                        <p>We may contact you to confirm delivery of your items.</p>
                        <input v-model="form.telephone" required type="tel" name="telephone" placeholder="Mobile or home number" />
                        <span v-show="errors.telephone" v-text="errors.telephone"></span>
                    </label>

                    <div class="block w-full text-right mt-8">
                        <button @click="placeOrder" class="px-4 bg-blue-500 text-white">Place Order</button>
                    </div>
                </div>
            </div>
        </div>

        <span class="block text-3xl w-full font-bold mt-16 text-left">Your Basket</span>

        <div class="flex flex-wrap w-full">
            <product v-for="(product, id) in $root.basket" :product="product" :key="`checkout-${id}`" />
        </div>
    </div>
</template>

<script>
    import Auth from './Auth'
    import Product from '../components/Product'

    export default {
        components: { Auth, Product },

        data() {
            return {
                errors: {},
                stripe: Stripe('pk_test_N80FjwnLlOqNE5I7KbX8SkJt'),

                form: {
                    telephone: null,
                },
            }
        },

        methods: {
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
        },
    }
</script>
