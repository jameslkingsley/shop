<template>
    <div>
        <sidebar title="Menu">
            <router-link to="/" class="hover:underline inline-block w-full py-1 text-sm text-black opacity-50">
                &larr; Back to home
            </router-link>
        </sidebar>

        <div class="flex w-full flex-col items-center py-8 px-6">
            <span class="text-xl font-semibold mb-6 text-center">Thanks for shopping with us!</span>

            <p class="block text-gray-700 text-center font-light">
                We have received your order and will contact you shortly to confirm the items you've chosen are in stock, and when you can expect delivery.<br /><br />
                If you need to make changes to your order, just call us on 01872 275102.
            </p>

            <div class="flex w-full flex-col items-center border-t mt-8 pt-8">
                <p class="block text-black text-center font-light">
                    When we're ready to deliver your order, we will charge your card
                    <strong v-if="$route.query.amount" class="font-bold">{{ $route.query.amount | currency }}</strong>.
                    <br />If we're unable to deliver some items that are out of stock, you will not be charged for them.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../components/Sidebar'

    export default {
        components: { Sidebar },

        created() {
            this.$clearBasket()
        },
    }
</script>
