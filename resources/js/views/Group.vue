<template>
    <div class="flex">
        <div class="block bg-white shadow-md rounded-b-lg w-sidebar p-4">
            <span class="block text-gray-900 font-bold text-sm mb-2">Pick a sub-category</span>

            <router-link to="/" class="hover:underline inline-block w-full text-sm text-black opacity-50 mb-2">
                &larr; Back to Categories
            </router-link>

            <router-link :to="`/group/${$route.params.group}/${category.id}`" v-for="category in categories" :key="`category-${category.id}`"
                class="hover:underline inline-block w-full text-sm text-black">
                {{ category.title }}
            </router-link>
        </div>

        <div class="flex-1">
            Products in group
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                categories: [],
            }
        },

        async beforeRouteEnter(to, from, next) {
            const { data } = await ajax.get(`/api/group/${to.params.group}`)

            next(vm => vm.fill(data))
        },

        methods: {
            fill(data) {
                this.categories = data
            },
        },
    }
</script>
