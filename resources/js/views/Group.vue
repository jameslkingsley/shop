<template>
    <div class="flex">
        <sidebar title="Pick a sub-category">
            <router-link to="/" class="hover:underline inline-block w-full py-1 text-sm text-black opacity-50">
                &larr; Back to categories
            </router-link>

            <router-link :to="`/group/${$route.params.group}/${category.id}`" v-for="category in categories" :key="`category-${category.id}`"
                class="hover:underline inline-block w-full py-1 text-sm text-black">
                {{ category.title }}
            </router-link>
        </sidebar>

        <div class="flex flex-wrap flex-1 p-4">
            <product v-for="product in products" :product="product" :key="`product-${product.id}`" />
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
                products: [],
                categories: [],
            }
        },

        async beforeRouteEnter(to, from, next) {
            const categories = await ajax.get(`/api/group/${to.params.group}`)
            const products = await ajax.get(`/api/product/${to.params.group}`)

            next(vm => vm.fill(categories.data, products.data))
        },

        methods: {
            fill(categories, products) {
                this.categories = categories
                this.products = products
            },
        },
    }
</script>
