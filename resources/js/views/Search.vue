<template>
    <div class="flex">
        <div v-if="products.length" class="flex flex-wrap flex-1 p-4">
            <product v-for="product in products" :product="product" :key="`product-${product.id}`" />
        </div>

        <div v-else class="w-full text-center text-lg py-8">
            We couldn't find anything for that! Please try something else
        </div>
    </div>
</template>

<script>
    import Product from '../components/Product'
    import Sidebar from '../components/Sidebar'

    export default {
        components: { Sidebar, Product },

        data() {
            return {
                products: []
            }
        },

        async beforeRouteEnter(to, from, next) {
            const { data } = await ajax.post('/api/search', { keyword: to.query.keyword })

            next(vm => vm.fill(data))
        },

        async beforeRouteUpdate(to, from, next) {
            const { data } = await ajax.post('/api/search', { keyword: to.query.keyword })

            this.fill(data)

            next()
        },

        methods: {
            fill(data) {
                this.products = data
            }
        },

        created() {
            this.$root.menuVisible = false
        }
    }
</script>
