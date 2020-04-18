<template>
    <div class="block w-full lg:w-1/2 xl:w-1/3 mb-16 orders-pending lg:pr-8 xl:pr-16">
        <slot name="title">
            <span class="text-xl block w-full font-bold -mb-2 px-4 sm:px-0">{{ title }}</span>
        </slot>

        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: { title: String },
    }
</script>
