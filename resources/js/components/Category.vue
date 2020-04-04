<template>
    <router-link :to="url" class="inline-block bg-white rounded shadow m-2 px-4 py-4 w-product text-base text-black">
        {{ title }}
    </router-link>
</template>

<script>
    export default {
        props: {
            url: String,
            title: String,
        }
    }
</script>
