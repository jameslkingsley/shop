@extends('layouts.app')

@section('content')
    @include('layouts.header', [
        'back' => '&larr; Continue shopping',
        'title' => 'Your Basket',
        'parent_url' => url('/'),
    ])

    <div class="grid shadow bg-background-lighter rounded-md divide-x divide-gray-100 w-full grid-cols-1 md:grid-cols-3 mb-6">
        <div>
            <div class="bg-white px-6 pt-6 pb-4 h-24">
                <h4 class="text-gray-400 uppercase text-xs font-medium leading-none mb-2">Payment Method</h4>

                <div class="inline-flex space-x-2 items-center select-none cursor-pointer">
                    <span @click="paymentMethod = 'online'" x-bind:class="{ 'opacity-25': paymentMethod !== 'online' }"
                        class="border-blue-500 text-blue-500 inline-flex items-center py-1 rounded-full pl-4 pr-1 border-2 font-bold transition-all duration-200 ease-in-out relative">
                        Online <i class="bg-blue-500 text-white text-xs uppercase not-italic px-2 py-1 rounded-full ml-2 transition-all duration-200 ease-in-out">preferred</i>
                    </span>

                    <span @click="paymentMethod = 'bank'" x-bind:class="{ 'opacity-25': paymentMethod !== 'bank' }"
                        class="border-blue-500 text-blue-500 rounded-full px-4 py-1 border-2 font-bold transition-all duration-200 ease-in-out">
                        Bank Transfer
                    </span>
                </div>
            </div>

            <div x-show="paymentMethod === 'online'" class="border-t border-gray-100 p-6">
                <h4 class="text-gray-400 uppercase text-xs font-medium">Saved Cards</h4>

                <div class="flex flex-col w-full mt-2 text-sm">
                    <div @click="cardId = 1" class="flex w-full items-center cursor-pointer select-none">
                        <span class="inline-flex mr-2 items-center justify-center rounded-full w-4 h-4 border-2 border-blue-500 bg-white">
                            <i class="block w-2 h-2 bg-blue-500 rounded-full"></i>
                        </span>

                        <span class="font-medium flex-1 text-gray-600">
                            Visa ending in 4242
                        </span>

                        <button class="hover:bg-blue-100 focus:bg-blue-200 focus:text-blue-600 px-2 py-1 rounded-md text-blue-500 font-bold uppercase focus:outline-none text-xs transition-all duration-200 ease-in-out">Update</button>
                    </div>

                    <div @click="cardId = 2" class="flex w-full items-center cursor-pointer select-none">
                        <span class="inline-flex mr-2 items-center justify-center rounded-full w-4 h-4 border-2 border-gray-300 bg-white">
                        </span>

                        <span class="font-medium flex-1 text-gray-400">
                            Visa ending in 8484
                        </span>

                        <button class="hover:bg-blue-100 focus:bg-blue-200 focus:text-blue-600 px-2 py-1 rounded-md text-blue-500 font-bold uppercase focus:outline-none text-xs transition-all duration-200 ease-in-out">Update</button>
                    </div>
                </div>

                <button class="mt-4 border-2 border-blue-500 font-medium text-sm rounded py-1 px-3 text-blue-500 focus:text-blue-600 focus:border-blue-600 focus:shadow-outline focus:outline-none transition-all duration-200 ease-in-out">Add Card</button>
            </div>

            <div x-show="paymentMethod === 'bank'" class="border-t border-gray-100 p-6 text-sm">
                <p>We'll send you an email to {{ 'youremail@example.com' }} when your order is ready for payment.</p>
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
                <h4 class="block w-full mb-2 text-gray-400 uppercase text-xs font-medium">Delivery Address</h4>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="relative cursor-pointer select-none border-2 border-blue-500 rounded-md px-3 py-2 text-sm font-normal bg-white shadow">
                        <span class="absolute top-0 right-0 bg-blue-500 text-white w-6 h-6 flex items-center justify-center rounded-full -mt-2 -mr-2">
                            @svg('checkmark', 'w-3 h-3 fill-current')
                        </span>

                        <span>
                            5 Fir Close<br />
                            Goonhavern<br />
                            Truro, Cornwall<br />
                            TR4 9QN
                        </span>
                    </div>

                    <div class="relative cursor-pointer select-none rounded-md px-3 py-2 text-sm font-normal bg-white shadow">
                        <span class="text-gray-500 truncate">
                            7 Fir Close<br />
                            Moonhavern<br />
                            Truro, Wheatwall<br />
                            TR9 4QN
                        </span>
                    </div>
                </div>

                <h4 class="block w-full mt-8 mb-2 text-gray-400 uppercase text-xs font-medium">Delivery Date</h4>

                <select class="bg-white shadow h-8">
                    @for ($i = 1; $i !== 30; $i++)
                        <option value="{{ now()->addDays($i)->toDateString() }}">
                            {{ now()->addDays($i)->format('D, jS M') }}
                        </option>
                    @endfor
                </select>
            </div>

            <div x-show="collection" class="border-t border-gray-100 p-6">
                <h4 class="text-gray-400 uppercase text-xs font-medium">Collection From</h4>
                <span class="text-sm">
                    Shortlanesend Store<br />
                    Church Road<br />
                    Shortlanesend, Truro<br />
                    TR4 9DY
                </span>
            </div>
        </div>

        <div>
            <div class="flex items-end bg-white p-6 h-full rounded-r-md">
                <div class="inline-flex flex-col flex-1">
                    <div class="flex flex-col mb-4">
                        <div class="inline-flex items-center text-xs text-blue-500 font-medium">
                            @svg('checkmark', 'w-3 h-3 mr-2 fill-current inline-block')
                            <span>Paying on card</span>
                        </div>

                        <div class="inline-flex items-center text-xs text-blue-500 font-medium">
                            @svg('checkmark', 'w-3 h-3 mr-2 fill-current inline-block')
                            <span>Free Delivery</span>
                        </div>
                    </div>

                    <span x-text="toCurrency(total())" class="text-3xl font-medium font-number leading-none"></span>
                </div>

                <button class="bg-blue-500 text-lg font-semibold rounded-md py-3 px-6 text-white focus:bg-blue-600 focus:shadow-outline focus:outline-none transition-all duration-200 ease-in-out">Place Order</button>
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
