<template>
    <router-link :to="url" class="inline-block bg-white rounded shadow m-2 px-4 py-4 w-product text-base text-black">
        <div class="block w-full h-32 bg-white rounded flex items-center justify-center mb-4 text-gray-500 text-xs">
            <img :src="image" alt="No image available" class="h-32" />
        </div>

        <span class="w-full text-lg font-semibold">{{ title }}</span>
    </router-link>
</template>

<script>
    export default {
        props: {
            url: String,
            title: String,
            image: String,
        }
    }
</script>
