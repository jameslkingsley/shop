<template>
    <div class="inline-flex flex-col w-product bg-white shadow m-2 p-4 rounded">
        <div class="block w-full h-32 bg-white rounded flex items-center justify-center mb-4 text-gray-500 text-xs">
            <img :src="imageUrl" :alt="product.title" class="h-32" />
        </div>

        <span class="w-full mb-4 text-sm">{{ product.title }}</span>

        <div class="flex-1 flex items-end">
            <div class="flex flex-col w-full">
                <span class="w-full text-xs">{{ product.unit_size }}</span>
                <span class="w-full font-bold">{{ product.price | currency }}</span>
                <add-to-basket :product="product" />
            </div>
        </div>
    </div>
</template>

<script>
    import AddToBasket from '../components/AddToBasket'

    export default {
        components: { AddToBasket },

        props: {
            product: Object,
        },

        computed: {
            imageUrl() {
                return `https://sle-shop.s3.eu-west-2.amazonaws.com/images/${this.product.ref}.jpg`
            }
        }
    }
</script>
