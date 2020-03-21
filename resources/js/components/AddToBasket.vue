<template>
    <div class="w-full mt-4">
        <button @click="add" v-show="! quantity" class="w-full">Add</button>

        <div v-show="quantity" class="flex w-full items-center justify-center text-center select-none">
            <button @click="remove" class="w-12">-</button>

            <span class="flex-1">{{ quantity }}</span>

            <button @click="add" class="w-12">+</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            product: Object,
        },

        computed: {
            quantity() {
                return _.get(this.$root.basket, this.product.id + '.qty')
            }
        },

        methods: {
            async add() {
                this.$addToBasket(this.product)
            },

            async remove() {
                this.$removeFromBasket(this.product)
            }
        }
    }
</script>
