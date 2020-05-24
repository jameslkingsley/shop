@extends('layouts.app')

@section('content')
    @include('layouts.header', [
        'parent' => 'basket',
        'title' => 'Order Checkout',
        'parent_url' => route('basket'),
    ])

    <div class="grid w-full grid-cols-1 md:grid-cols-3 gap-6"
        x-data="{}" x-init="Basket.applyDefaults({{ json_encode($basketDefaults) }})">
        <div class="flex flex-col divide-y divide-gray-100 bg-white shadow-md rounded-md md:col-span-2">
            <div x-data="{ change: false }">
                <div class="p-6">
                    <div class="flex w-full items-center mb-4 leading-none text-gray-800 select-none">
                        <span class="flex-1 text-lg">Choose a payment method</span>
                        <button class="inline-flex items-center text-blue-600 hover:text-blue-500 uppercase text-sm font-medium">
                            @svg('add-outline', 'w-4 h-4 fill-current mr-2')
                            <span>Add Card</span>
                        </button>
                    </div>

                    <div class="grid grid-cols-2 gap-6 w-full text-base">
                        @foreach ($cards as $card)
                            <div @click="$store.basket.cardId = cardId" x-subscribe x-data="{ cardId: {{ $card->id }} }"
                                class="group flex w-full items-center cursor-pointer select-none p-4 rounded-md transition-all duration-150 ease-in-out"
                                x-bind:class="{
                                    'border-2 border-gray-100 bg-background-lighter text-gray-600': $store.basket.cardId !== cardId,
                                    'border-2 border-blue-500 bg-blue-100 text-blue-600': $store.basket.cardId === cardId,
                                }">
                                <span class="form-radio mr-4" x-bind:checked="$store.basket.cardId === cardId">
                                    <i></i>
                                </span>

                                <span class="font-medium flex-1 inline-flex items-center">
                                    {{ $card->brand }} ending in {{ $card->last_four }}
                                    @if ($card->primary)
                                        <span class="text-xs ml-2 opacity-75">(default)</span>
                                    @endif
                                </span>

                                <button class="opacity-0 group-hover:opacity-100 inline-flex items-center justify-center rounded-full w-6 h-6 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-150 ease-in-out">
                                    @svg('edit-pencil', 'w-3 h-3 fill-current')
                                </button>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>

            <div class="p-6">
                <div>
                    <h4 class="text-gray-400 uppercase text-xs font-medium leading-none mb-2">Delivery method</h4>

                    <div class="inline-flex space-x-2 items-center select-none cursor-pointer">
                    <span @click="$store.basket.collection = false" x-bind:class="{ 'opacity-25': $store.basket.collection }"
                        class="rounded-full px-4 py-1 border-2 border-blue-500 text-blue-500 font-bold transition-all duration-200 ease-in-out">
                        Home Delivery
                    </span>

                        <span @click="$store.basket.collection = true" x-bind:class="{ 'opacity-25': ! $store.basket.collection }"
                            class="rounded-full px-4 py-1 border-2 border-blue-500 text-blue-500 font-bold transition-all duration-200 ease-in-out">
                        Collection
                    </span>
                    </div>
                </div>

                <div x-show="! $store.basket.collection">
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

                <div x-show="$store.basket.collection" class="border-t border-gray-100 p-6">
                    <h4 class="text-gray-400 uppercase text-xs font-medium">Collection From</h4>
                    <span class="text-sm">
                    Shortlanesend Store<br />
                    Church Road<br />
                    Shortlanesend, Truro<br />
                    TR4 9DY
                </span>
                </div>
            </div>
        </div>

        <div class="bg-white shadow-md rounded-md">
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

                    <span x-text="toCurrency(Basket.total())" class="text-3xl font-medium font-number leading-none"></span>
                </div>

                <button class="bg-blue-500 text-lg font-semibold rounded-md py-3 px-6 text-white focus:bg-blue-600 focus:shadow-outline focus:outline-none transition-all duration-200 ease-in-out">Place Order</button>
            </div>
        </div>
    </div>
@endsection
