<template>
    <div class="flex flex-wrap">
        <sidebar title="Pick a category">
            <router-link :to="`/group/${group.id}`" v-for="group in groups" :key="`group-${group.id}`" class="hover:underline inline-block w-full py-1 text-sm text-black">
                {{ group.title }}
            </router-link>
        </sidebar>

        <div class="block w-full px-6 py-8 text-center">
            <span class="w-full text-xl sm:text-2xl font-bold">To start, pick a category.</span>
            <p>You can choose which items you would like, place your order online, and we'll deliver it to your door!</p>
        </div>

        <div class="flex flex-wrap p-6 flex-1">
            <category :title="group.title" :image="group.image" :url="`/group/${group.id}`"
                v-for="group in groups" :key="`group-${group.id}`" />
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
                groups: [],
            }
        },

        async beforeRouteEnter(to, from, next) {
            const { data } = await ajax.get('/api/group')

            next(vm => vm.fill(data))
        },

        methods: {
            fill(data) {
                this.groups = data
            },
        },
    }
</script>
