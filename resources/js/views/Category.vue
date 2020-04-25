<template>
    <div class="flex flex-wrap">
        <sidebar title="Pick a sub-category">
            <router-link :to="`/group/${$route.params.group}`" class="hover:underline inline-block w-full py-1 text-sm text-black opacity-50">
                &larr; Back to sub-categories
            </router-link>
        </sidebar>

        <div class="w-full p-6">
            <router-link :to="`/group/${$route.params.group}`" class="hover:underline inline-block w-full py-1 text-black opacity-50">
                &larr; {{ group.pgTitle }}
            </router-link>

            <div class="block w-full text-2xl font-bold mt-2">
                {{ category.pcatTitle }}
            </div>

            <div v-if="category.pcatDescription" class="mt-2 text-lg">
                <div v-html="category.pcatDescription"></div>
            </div>
        </div>

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
                group: {},
                category: {},
                products: [],
            }
        },

        async beforeRouteEnter(to, from, next) {
            const { data } = await ajax.get(`/api/group/${to.params.group}/${to.params.category}`)

            next(vm => vm.fill(data))
        },

        methods: {
            fill({ products, category, group }) {
                this.products = products
                this.category = category
                this.group = group
            },
        },

        created() {
            this.$root.menuVisible = false
        },
    }
</script>
