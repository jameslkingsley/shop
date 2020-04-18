<template>
    <div class="flex flex-wrap items-start justify-between w-full py-4 sm:py-8 sm:px-10">
        <order-group-pending />
        <order-group-picking />
        <order-group-collection />

        <order-group title="Out for delivery">
            <template #title>
                <div class="flex w-full items-center -mb-2 px-4 sm:px-0">
                    <span class="text-xl flex-1 font-bold">
                        Out for delivery
                    </span>

                    <div class="inline-flex justify-end items-center ml-4">
                        <a v-for="group in groups" :href="`/dispatch/${group}`" target="_blank" :class="`bg-${group}-400 active:bg-${group}-500`"
                            class="rounded-full flex items-center justify-center w-6 h-6 cursor-pointer select-none transition-all transform hover:scale-110 ease-in-out duration-200 ml-1">
                            <icon name="printer" class="size-3 text-white fill-current" />
                        </a>
                    </div>
                </div>
            </template>

            <delivery-group />
            <delivery-group group="red" />
            <delivery-group group="green" />
            <delivery-group group="blue" />
            <delivery-group group="orange" />
        </order-group>

        <order-group-fulfilled />

        <div class="hidden lg:block w-full mt-8">
            <span v-if="! isShutdown" @click="shutdown" class="text-red-600 text-xs underline cursor-pointer select-none">
                Shutdown Online Orders
            </span>

            <span v-else @click="startup" class="text-blue-500 text-xs underline cursor-pointer select-none">
                Startup Online Orders
            </span>
        </div>
    </div>
</template>

<script>
    import OrderGroup from '../components/OrderGroup'
    import OrderGroupPending from '../components/OrderGroupPending'
    import OrderGroupPicking from '../components/OrderGroupPicking'
    import OrderGroupCollection from '../components/OrderGroupCollection'
    import OrderGroupFulfilled from '../components/OrderGroupFulfilled'
    import DeliveryGroup from '../components/DeliveryGroup'

    export default {
        components: {
            OrderGroup,
            OrderGroupPending,
            OrderGroupPicking,
            OrderGroupCollection,
            OrderGroupFulfilled,
            DeliveryGroup,
        },

        data() {
            return {
                isShutdown: App.isShutdown,
                groups: ['red', 'green', 'blue', 'orange'],
            }
        },

        methods: {
            async shutdown() {
                const shouldContinue = window.confirm('Warning!\n\nShutting down online orders will prevent customers from accessing the online shop. You will need to come here to startup the shop again.\n\nAre you sure?')

                if (shouldContinue) {
                    await ajax.post('/api/admin/shutdown')

                    this.isShutdown = true
                }
            },

            async startup() {
                await ajax.delete('/api/admin/shutdown')

                this.isShutdown = false
            },
        },
    }
</script>
