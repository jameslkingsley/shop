<template>
    <div class="flex flex-wrap">
        <sidebar title="Pick a sub-category">
            <router-link to="/" class="hover:underline inline-block w-full py-1 text-sm text-black opacity-50">
                &larr; Back to categories
            </router-link>

            <router-link :to="`/group/${$route.params.group}/${category.id}`" v-for="category in categories" :key="`category-${category.id}`"
                class="hover:underline inline-block w-full py-1 text-sm text-black">
                {{ category.title }}
            </router-link>
        </sidebar>

        <div class="w-full p-6">
            <router-link to="/" class="hover:underline inline-block w-full py-1 text-black opacity-50">
                &larr; Back to categories
            </router-link>

            <div class="block w-full text-2xl font-bold mt-2">
                {{ group.pgTitle }}
            </div>

            <div v-if="group.pgDescription" class="mt-2 text-lg">
                <div v-html="group.pgDescription"></div>
            </div>
        </div>

        <div class="flex flex-wrap flex-1 p-4">
            <category :title="category.title" :image="category.image" :url="`/group/${$route.params.group}/${category.id}`"
                v-for="category in categories" :key="`category-${category.id}`" />
        </div>
    </div>
</template>

<script>
    import Sidebar from '../components/Sidebar'
    import Category from '../components/Category'

    export default {
        components: { Sidebar, Category },

        data() {
            return {
                group: {},
                categories: [],
            }
        },

        async beforeRouteEnter(to, from, next) {
            const { data } = await ajax.get(`/api/group/${to.params.group}`)

            next(vm => vm.fill(data))
        },

        methods: {
            fill({ group, categories }) {
                this.group = group
                this.categories = categories
            },
        },

        created() {
            this.$root.menuVisible = false
        },
    }
</script>
