<template>
    <div class="flex">
        <div class="block bg-white shadow-md rounded-b-lg w-sidebar p-4">
            <router-link :to="`/group/${$route.params.group}`" class="hover:underline inline-block w-full text-sm text-black opacity-50">
                &larr; Back to Sub-categories
            </router-link>
        </div>

        <div class="flex flex-wrap flex-1 p-4">
            <product v-for="product in products" :product="product" :key="`product-${product.id}`" />
        </div>
    </div>
</template>

<script>
    import Product from '../components/Product'

    export default {
        components: { Product },

        data() {
            return {
                products: [],
            }
        },

        async beforeRouteEnter(to, from, next) {
            const { data } = await ajax.get(`/api/group/${to.params.group}/${to.params.category}`)

            next(vm => vm.fill(data))
        },

        methods: {
            fill(data) {
                this.products = data
            },
        },
    }
</script>
