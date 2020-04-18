<template>
    <div class="flex flex-wrap items-start justify-between w-full py-4 sm:py-8 sm:px-10">
        <order-group-pending />
        <order-group-picking />
        <order-group-collection />

        <order-group title="Out for delivery">
            <delivery-group />
            <delivery-group group="red" />
            <delivery-group group="green" />
            <delivery-group group="blue" />
            <delivery-group group="orange" />
        </order-group>

        <order-group-fulfilled />
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
    }
</script>
