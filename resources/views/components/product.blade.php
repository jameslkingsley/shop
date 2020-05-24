<div x-subscribe class="inline-flex flex-col bg-white shadow p-4 rounded-md">
    <div class="block w-full h-32 bg-white rounded flex items-center justify-center mb-4 text-gray-500 text-xs">
        @if ($alpine ?? false)
            <img x-bind:src="'https://sle-shop.s3.eu-west-2.amazonaws.com/images/' + {{ $alpine }}.ref + '.jpg'" alt="No image available" class="h-32" />
        @else
            <img src="{{ "https://sle-shop.s3.eu-west-2.amazonaws.com/images/{$product->ref}.jpg" }}" alt="No image available" class="h-32" />
        @endif
    </div>

    <span class="w-full text-sm" @if ($alpine ?? false) x-text="{{ $alpine }}.title" @endif>
        {{ $product->title ?? '' }}
    </span>

    <span class="w-full mb-4 text-2xs text-gray-500" @if ($alpine ?? false) x-text="'#' + {{ $alpine }}.id" @endif>
        {{ $product->id ?? '' }}
    </span>

    <div class="flex-1 flex items-end">
        <div class="flex flex-col w-full">
            <span class="w-full text-xs" @if ($alpine ?? false) x-text="{{ $alpine }}.unit_size" @endif>
                {{ $product->unit_size ?? '' }}
            </span>

            <span class="w-full font-bold" @if ($alpine ?? false) x-html="`${toCurrency({{ $alpine }}.price)}`" @endif>
                @if ($product->price ?? false)
                &pound;{{ number_format($product->price / 100, 2) }}
                @endif
            </span>

            <div class="w-full mt-4">
                <button
                    @if ($alpine ?? false)
                    @click="Basket.add({{ $alpine }})"
                    x-show="! Basket.has({{ $alpine }}.id)"
                    @else
                    @click="Basket.add({{ json_encode($product) }})"
                    x-show="! Basket.has({{ $product->id }})"
                    @endif
                    class="w-full bg-blue-500 rounded py-2 px-4 text-white focus:bg-blue-600 focus:shadow-outline focus:outline-none transition-all duration-200 ease-in-out">
                    Add to Basket
                </button>

                <div @if ($alpine ?? false) x-show="Basket.has({{ $alpine }}.id)" @else x-show="Basket.has({{ $product->id }})" @endif class="flex w-full items-center justify-center text-center select-none">
                    @if ($alpine ?? false)
                        <button @click="Basket.remove({{ $alpine }})" class="w-12 btn">-</button>
                    @else
                        <button @click="Basket.remove({{ json_encode($product) }})" class="w-12 btn">-</button>
                    @endif

                    @if ($alpine ?? false)
                        <span class="flex-1 font-medium text-lg text-black" x-text="{{ $alpine }}.qty || 0"></span>
                    @else
                        <span class="flex-1 font-medium text-lg text-black" x-text="Basket.find({{ $product->id }}).qty || 0"></span>
                    @endif

                    @if ($alpine ?? false)
                        <button @click="Basket.add({{ $alpine }})" class="w-12 btn">-</button>
                    @else
                        <button @click="Basket.add({{ json_encode($product) }})" class="w-12 btn">+</button>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>
