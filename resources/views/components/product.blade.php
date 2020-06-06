<div class="inline-flex flex-col bg-white shadow p-4 rounded-md">
    <div class="block w-full h-32 bg-white rounded flex items-center justify-center mb-4 text-gray-500 text-xs">
        <img x-bind:src="`https://sle-shop.s3.eu-west-2.amazonaws.com/images/${item.ref}.jpg`" alt="No image available" class="h-32" />
    </div>

    <span class="w-full text-base" x-text="item.title"></span>

    <span class="w-full mb-4 text-2xs text-gray-500" x-text="`#${item.id}`"></span>

    <div class="flex-1 flex items-end">
        <div class="flex flex-col w-full">
            <span class="w-full text-xs" x-text="item.unit_size"></span>

            <span class="w-full font-bold" x-html="`${toCurrency(item.price)}`"></span>

            <div class="w-full mt-4">
                <button @click="Basket.add(item)" x-show="! Basket.has(item.id)" class="w-full bg-blue-500 rounded py-2 px-4 text-white focus:bg-blue-600 focus:shadow-outline focus:outline-none transition-all duration-200 ease-in-out">
                    Add to Basket
                </button>

                <div x-show="Basket.has(item.id)" class="flex w-full items-center justify-center text-center select-none">
                    <button @click="Basket.remove(item)" class="w-12 btn">-</button>

                    <span class="flex-1 font-medium text-lg text-black" x-text="Basket.find(item.id).qty || 0"></span>

                    <button @click="Basket.add(item)" class="w-12 btn">+</button>
                </div>
            </div>
        </div>
    </div>
</div>
