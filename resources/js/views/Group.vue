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
            <router-link :to="`/group/${$route.params.group}/${category.id}`" v-for="category in categories" :key="`category-${category.id}`"
                class="inline-block bg-white rounded shadow m-2 px-4 py-4 w-product text-base text-black">
                {{ category.title }}
            </router-link>
        </div>
    </div>
</template>

<script>
    import Sidebar from '../components/Sidebar'

    export default {
        components: { Sidebar },

        data() {
            return {
                categories: [],
            }
        },

        async beforeRouteEnter(to, from, next) {
            const categories = await ajax.get(`/api/group/${to.params.group}`)

            next(vm => vm.fill(categories.data))
        },

        methods: {
            fill(categories) {
                this.categories = categories
            },
        },

        created() {
            this.$root.menuVisible = false
        }
    }
</script>
