@extends('layouts.app')

@section('content')
    @include('layouts.header', [
        'back' => '&larr; Continue shopping',
        'title' => 'Your Basket',
        'parent_url' => url('/'),
    ])

    <div class="grid overflow-hidden shadow bg-background-lighter rounded-md divide-x divide-gray-100 w-full grid-cols-1 md:grid-cols-3 mb-6">
        <div>
            <div class="bg-white px-6 pt-6 pb-4 h-24">
                <h4 class="text-gray-400 uppercase text-xs font-medium leading-none mb-2">Payment Method</h4>
                {{--<span x-text="toCurrency(total())" class="text-3xl font-number leading-none"></span>--}}
                <div class="inline-flex space-x-2 items-center select-none cursor-pointer">
                    <span @click="paymentMethod = 'online'"
                        class="inline-flex items-center py-1 rounded-full pl-4 pr-1 border-2 font-bold transition-all duration-200 ease-in-out relative"
                        x-bind:class="{ 'border-blue-500 text-blue-500': paymentMethod === 'online', 'border-gray-400 text-gray-400': paymentMethod !== 'online' }">
                        Online <i x-bind:class="{ 'bg-blue-500 text-white': paymentMethod === 'online', 'bg-gray-200 text-gray-400': paymentMethod !== 'online' }"
                            class="text-xs uppercase not-italic px-2 py-1 rounded-full ml-2 transition-all duration-200 ease-in-out">preferred</i>
                    </span>

                    <span @click="paymentMethod = 'bank'"
                        class="rounded-full px-4 py-1 border-2 font-bold transition-all duration-200 ease-in-out"
                        x-bind:class="{ 'border-blue-500 text-blue-500': paymentMethod === 'bank', 'border-gray-400 text-gray-400': paymentMethod !== 'bank' }">
                        Bank Transfer
                    </span>
                </div>
            </div>

            <div class="border-t border-gray-100 p-6">
                <h4 class="text-gray-400 uppercase text-xs font-medium">Saved Cards</h4>

                <div class="flex flex-col space-y-2 w-full mt-2">
                    <div class="flex w-full items-center">
                        <span class="inline-flex mr-2 items-center justify-center rounded-full w-4 h-4 border-2 border-blue-500 bg-white">
                            <i class="block w-2 h-2 bg-blue-500 rounded-full"></i>
                        </span>

                        <span class="text-base font-medium flex-1">
                            Visa ending in 4242
                        </span>

                        <button class="hover:bg-blue-100 focus:bg-blue-200 focus:text-blue-600 px-2 py-1 rounded-md text-blue-500 font-bold uppercase focus:outline-none text-xs transition-all duration-200 ease-in-out">Update</button>
                    </div>

                    <div class="flex w-full items-center opacity-50">
                        <span class="inline-flex mr-2 items-center justify-center rounded-full w-4 h-4 border-2 border-blue-500 bg-white">
                            {{--<i class="block w-2 h-2 bg-blue-500 rounded-full"></i>--}}
                        </span>

                        <span class="text-base font-medium flex-1">
                            Visa ending in 8484
                        </span>

                        <button class="hover:bg-blue-100 focus:bg-blue-200 focus:text-blue-600 px-2 py-1 rounded-md text-blue-500 font-bold uppercase focus:outline-none text-xs transition-all duration-200 ease-in-out">Update</button>
                    </div>
                </div>

                <button class="mt-4 border-2 border-blue-500 font-medium text-sm rounded py-1 px-3 text-blue-500 focus:text-blue-600 focus:border-blue-600 focus:shadow-outline focus:outline-none transition-all duration-200 ease-in-out">Add Card</button>
            </div>
        </div>

        <div>
            <div class="bg-white px-6 pt-6 pb-4 h-24">
                <h4 class="text-gray-400 uppercase text-xs font-medium leading-none mb-2">Delivery method</h4>

                <div class="inline-flex space-x-2 items-center select-none cursor-pointer">
                    <span @click="collection = false" x-bind:class="{ 'opacity-25': collection }"
                        class="rounded-full px-4 py-1 border-2 border-blue-500 text-blue-500 font-bold transition-all duration-200 ease-in-out">
                        Home Delivery
                    </span>

                    <span @click="collection = true" x-bind:class="{ 'opacity-25': ! collection }"
                        class="rounded-full px-4 py-1 border-2 border-blue-500 text-blue-500 font-bold transition-all duration-200 ease-in-out">
                        Collection
                    </span>
                </div>
            </div>

            <div x-show="! collection" class="border-t border-gray-100 p-6">
                <h4 class="text-gray-400 uppercase text-xs font-medium">Delivery Address</h4>
                <span class="text-base">
                    5 Fir Close<br />
                    Goonhavern<br />
                    Truro, Cornwall<br />
                    TR4 9QN
                </span>
            </div>

            <div x-show="collection" class="border-t border-gray-100 p-6">
                <h4 class="text-gray-400 uppercase text-xs font-medium">Collection From</h4>
                <span class="text-base">
                    Shortlanesend Store<br />
                    Church Road<br />
                    Shortlanesend, Truro<br />
                    TR4 9DY
                </span>
            </div>
        </div>

        <div>
            <div class="bg-white px-6 pt-6 pb-4 h-24 text-right">
                <button class="bg-blue-500 text-lg font-semibold rounded-md py-3 px-6 text-white focus:bg-blue-600 focus:shadow-outline focus:outline-none transition-all duration-200 ease-in-out">Place Order</button>
            </div>

            <div class="border-t border-gray-100 p-6">
                <p class="text-xs opacity-50">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempus arcu convallis placerat lobortis. Etiam vulputate, tellus eu ornare bibendum, nulla libero pretium felis, ac lobortis eros enim vitae odio.
                </p>
            </div>
        </div>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <template x-for="item in _.values(items)">
            <div class="inline-flex flex-col bg-white shadow p-4 rounded-md">
                <div class="block w-full h-32 bg-white rounded flex items-center justify-center mb-4 text-gray-500 text-xs">
                    <img x-bind:src="`https://sle-shop.s3.eu-west-2.amazonaws.com/images/${item.ref}.jpg`" alt="No image available" class="h-32" />
                </div>

                <span class="w-full text-sm" x-text="item.title"></span>
                <span class="w-full mb-4 text-2xs text-gray-500" x-text="`#${item.id}`"></span>

                <div class="flex-1 flex items-end">
                    <div class="flex flex-col w-full">
                        <span class="w-full text-xs" x-text="item.unit_size"></span>
                        <span class="w-full font-bold" x-html="`${toCurrency(item.price)}`"></span>

                        <div class="w-full mt-4">
                            <div class="flex w-full items-center justify-center text-center select-none">
                                <button @click="remove(item)" class="w-12 bg-blue-500 rounded-md py-2 px-4 text-white focus:bg-blue-600 focus:shadow-outline focus:outline-none transition-all duration-200 ease-in-out">-</button>

                                <span class="flex-1 font-medium text-lg text-black" x-text="item.qty || 0"></span>

                                <button @click="add(item)" class="w-12 bg-blue-500 rounded-md py-2 px-4 text-white focus:bg-blue-600 focus:shadow-outline focus:outline-none transition-all duration-200 ease-in-out">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
@endsection
