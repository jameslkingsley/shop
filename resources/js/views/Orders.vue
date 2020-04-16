<template>
    <div class="flex flex-wrap items-start justify-between w-full py-4 sm:py-8 sm:px-10">
        <order-group title="Pending" endpoint="pending" />
        <order-group title="Being picked" endpoint="picking" />
        <order-group title="Waiting for collection" endpoint="collection" />
        <order-group title="Fulfilled" endpoint="fulfilled" />
    </div>
</template>

<script>
    import OrderGroup from '../components/OrderGroup'

    export default {
        components: { OrderGroup }
    }
</script>
