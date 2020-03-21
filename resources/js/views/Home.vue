<template>
    <div class="flex">
        <div class="block bg-white shadow-md rounded-b-lg w-sidebar flex-shrink-0 p-4">
            <span class="block text-gray-900 font-bold text-sm mb-2">Pick a category</span>

            <router-link :to="`/group/${group.id}`" v-for="group in groups" :key="`group-${group.id}`" class="hover:underline inline-block w-full text-sm text-black">
                {{ group.title }}
            </router-link>
        </div>

        <div class="flex-1">
            Top Picks?
        </div>
    </div>
</template>

<script>
    export default {
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
