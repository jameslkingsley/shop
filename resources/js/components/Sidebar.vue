<template>
    <div v-show="$root.menuVisible" class="fixed z-50 flex flex-col left-0 top-0 bottom-0 w-basket transition-all duration-200 ease-in-out">
        <div class="flex flex-1 flex-col bg-background-lighter shadow-lg overflow-y-hidden">
            <span class="flex items-center text-gray-900 font-bold text-xl px-6 py-4 bg-white border-b border-gray-200">
                <icon @click.native="$root.menuVisible = false" name="close" width="20" height="20" class="text-black mr-4 cursor-pointer select-none" />
                <span>{{ title }}</span>
            </span>

            <div class="block w-full flex-1 px-6 py-4 overflow-y-auto">
                <span class="block w-full mb-4 text-black text-sm">
                    Call us on <strong>01872 275102</strong>
                </span>

                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String
        }
    }
</script>
