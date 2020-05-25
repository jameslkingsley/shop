<div x-data="{{ json_encode(compact('cards', 'addresses')) }}"
    x-init="Basket.applyDefaults({{ json_encode($basketDefaults) }})" x-subscribe>
    <div class="sticky bg-white rounded-md shadow-md overflow-hidden flex flex-col divide-y divide-gray-100" style="top: 5.5rem">
        <div class="flex flex-col">
            <div @click="$store.basket.editPayment = ! $store.basket.editPayment" class="group flex items-start p-4 md:p-6 cursor-pointer select-none transition-all duration-150 ease-in-out" x-bind:class="{ 'hover:bg-background-lighter': ! $store.basket.editPayment }">
                <div class="inline-flex flex-col space-y-1 flex-1">
                    <span class="uppercase text-gray-400 text-xs font-semibold tracking-wide">Payment Method</span>

                    <template x-if="$store.basket.card">
                        <div x-show="! $store.basket.editPayment" class="inline-flex flex-col">
                            <span class="text-black font-medium" x-text="$store.basket.card.name"></span>
                            <span class="text-sm">
                                <span x-text="$store.basket.card.brand"></span>
                                ending in
                                <span x-text="$store.basket.card.last_four"></span>
                            </span>
                        </div>
                    </template>

                    <template x-if="! $store.basket.card">
                        <span>Click to add payment method</span>
                    </template>
                </div>

                <button class="text-gray-500 group-hover:text-blue-500">
                    @svg('cheveron-down', 'w-5 h-5 fill-current', ['x-show' => '! $store.basket.editPayment'])
                    @svg('cheveron-up', 'w-5 h-5 fill-current', ['x-show' => '$store.basket.editPayment'])
                </button>
            </div>

            <div x-show="$store.basket.editPayment" class="px-4 pb-4 md:pb-6 md:px-6 -mt-2">
                <div class="flex flex-col space-y-4 w-full">
                    <template x-for="card in cards">
                        <div @click="$store.basket.card = card; $store.basket.editPayment = false"
                            class="group flex w-full items-start cursor-pointer select-none p-4 rounded-md transition-all duration-150 ease-in-out"
                            x-bind:class="{
                                'border-2 border-gray-100 text-gray-500': $store.basket.card.id !== card.id,
                                'border-2 border-blue-500': $store.basket.card.id === card.id,
                            }">
                            <span class="form-radio mr-2 flex-shrink-0" x-bind:checked="$store.basket.card.id === card.id">
                                <i></i>
                            </span>

                            <div class="flex-1 inline-flex flex-col">
                                <span class="font-medium text-base leading-none" x-text="card.name"></span>

                                <span class="text-sm leading-none mt-2">
                                    <span x-text="card.brand"></span>
                                    ending in
                                    <span x-text="card.last_four"></span>
                                </span>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <div class="flex flex-col">
            <div @click="$store.basket.editDelivery = ! $store.basket.editDelivery" class="group flex items-start p-4 md:p-6 cursor-pointer select-none transition-all duration-150 ease-in-out" x-bind:class="{ 'hover:bg-background-lighter': ! $store.basket.editDelivery }">
                <div class="inline-flex flex-col space-y-1 flex-1">
                    <span class="uppercase text-gray-400 text-xs font-semibold tracking-wide">Delivery Method</span>
                    <div x-show="! $store.basket.editDelivery" class="inline-flex flex-col">
                        <span class="text-black font-medium" x-text="$store.basket.collection ? 'Collection' : 'Home Delivery'"></span>
                        <span class="text-sm">
                            <span x-text="moment($store.basket.deliveryDate).format('Do MMM')"></span>
                            &middot;
                            <span x-text="$store.basket.collection ? 'Church Road' : $store.basket.address.line1"></span>,
                            <span x-text="$store.basket.collection ? 'Shortlanesend' : $store.basket.address.line2"></span>
                        </span>
                    </div>
                </div>

                <button class="text-gray-500 group-hover:text-blue-500">
                    @svg('cheveron-down', 'w-5 h-5 fill-current', ['x-show' => '! $store.basket.editDelivery'])
                    @svg('cheveron-up', 'w-5 h-5 fill-current', ['x-show' => '$store.basket.editDelivery'])
                </button>
            </div>

            <div x-show="$store.basket.editDelivery" class="px-4 pb-4 md:pb-6 md:px-6 -mt-2">
                <div class="form-switch mb-6">
                    <span @click="$store.basket.collection = false" x-bind:active="! $store.basket.collection">Home Delivery</span>
                    <span @click="$store.basket.collection = true" x-bind:active="$store.basket.collection">Collection</span>
                </div>

                <div x-show="$store.basket.collection" class="group flex w-full items-start select-none p-4 rounded-md border-2 border-blue-500 transition-all duration-150 ease-in-out">
                    @svg('home', 'w-4 h-4 mr-2 flex-shrink-0 fill-current text-blue-500')

                    <div class="flex-1 inline-flex flex-col">
                        <span class="font-medium text-base leading-none">
                            Shortlanesend Store
                        </span>

                        <span class="text-sm leading-normal mt-2">
                            Church Road, Shortlanesend
                            <br />
                            Truro, TR4 9DY
                            <br />
                            01872 275102
                        </span>
                    </div>
                </div>

                <div x-show="! $store.basket.collection" class="flex flex-col space-y-4 w-full">
                    <template x-for="address in addresses">
                        <div @click="$store.basket.address = address"
                            class="group flex w-full items-start cursor-pointer select-none p-4 rounded-md transition-all duration-150 ease-in-out"
                            x-bind:class="{
                                'border-2 border-gray-100 text-gray-500': $store.basket.address.id !== address.id,
                                'border-2 border-blue-500': $store.basket.address.id === address.id,
                            }">
                            <span class="form-radio mr-2 flex-shrink-0" x-bind:checked="$store.basket.address.id === address.id">
                                <i></i>
                            </span>

                            <div class="flex-1 inline-flex flex-col">
                                <span class="font-medium text-base leading-none" x-text="address.full_name"></span>

                                <span class="text-sm leading-normal mt-2">
                                    <span x-text="address.line1"></span>,
                                    <span x-text="address.line2"></span>
                                    <br />
                                    <span x-text="address.city"></span>,
                                    <span x-text="address.postcode"></span>
                                    <br />
                                    <span x-text="address.telephone"></span>
                                </span>
                            </div>
                        </div>
                    </template>
                </div>

                <span class="block w-full mt-6 mb-4 uppercase text-gray-400 text-xs font-semibold tracking-wide">Delivery Date</span>

                <div class="flex w-full select-none">
                    <button @click="$store.basket.deliveryDateWeekIndex = Math.max(0, $store.basket.deliveryDateWeekIndex - 1)"
                        x-bind:class="{ 'opacity-50 pointer-events-none': $store.basket.deliveryDateWeekIndex === 0 }"
                        class="btn btn-sm btn-gray flex-shrink-0">
                        @svg('arrow-left', 'w-8 h-3 my-1 fill-current')
                    </button>

                    <span x-text="Basket.currentDeliveryWeek()"
                        class="inline-flex items-center flex-1 justify-center font-medium">
                    </span>

                    <button @click="$store.basket.deliveryDateWeekIndex = Math.min(4, $store.basket.deliveryDateWeekIndex + 1)"
                        x-bind:class="{ 'opacity-50 pointer-events-none': $store.basket.deliveryDateWeekIndex === 4 }"
                        class="btn btn-sm btn-gray flex-shrink-0">
                        @svg('arrow-right', 'w-8 h-3 my-1 fill-current')
                    </button>
                </div>

                <div class="mt-2 grid grid-cols-6 w-full rounded-md bg-gray-100 p-1 gap-1">
                    <template x-for="day in Basket.availableDeliveryDates()">
                        <div @click="$store.basket.deliveryDate = day.format('YYYY-MM-DD')"
                            class="flex flex-col leading-none py-2 items-center justify-center bg-white rounded cursor-pointer select-none transition-all duration-150 ease-in-out"
                            x-bind:class="{
                                'bg-blue-500 text-white': $store.basket.deliveryDate === day.format('YYYY-MM-DD'),
                                'opacity-25 pointer-events-none select-none': day.disabled
                            }">
                            <span class="text-sm font-medium" x-text="day.format('ddd')"></span>
                            <span class="mt-1 font-medium text-xs opacity-50" x-text="day.format('Do')"></span>
                        </div>
                    </template>
                </div>
            </div>
        </div>

        <div class="flex items-start p-4 md:p-6 select-none transition-all duration-150 ease-in-out">
            <div class="inline-flex flex-col space-y-2 flex-1">
                <span class="uppercase text-gray-400 text-xs font-semibold tracking-wide">Order Preferences</span>
                <div class="inline-flex flex-col">
                    <div class="flex items-center">
                        <input id="allow_substitutions" type="checkbox" checked class="form-checkbox h-4 w-4 text-blue-500 transition duration-150 ease-in-out" />
                        <label for="allow_substitutions" class="ml-2 block text-sm leading-5 text-gray-900">
                            Allow Substitutions
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-start p-4 md:p-6 select-none transition-all duration-150 ease-in-out">
            <div class="inline-flex items-end space-x-4 flex-1">
                <div class="inline-flex flex-col">
                    <span class="text-gray-400 text-sm font-semibold leading-none mb-2">Total to pay</span>
                    <span class="text-2xl font-normal font-number leading-none" x-text="toCurrency(Basket.total())"></span>
                </div>

                <div class="flex-1 text-right">
                    <button class="inline-flex items-center justify-center btn btn-lg">
                        @svg('lock-closed', 'w-4 h-4 fill-current mr-2')
                        <span>Place Order</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

{{--
<div class=""
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
            <div class="flex w-full items-center mb-4 leading-none text-gray-800 select-none">
                <span class="flex-1 text-lg">Choose a delivery method</span>
                <button class="inline-flex items-center text-blue-600 hover:text-blue-500 uppercase text-sm font-medium">
                    @svg('add-outline', 'w-4 h-4 fill-current mr-2')
                    <span>Add Address</span>
                </button>
            </div>

            <div x-data="{}" x-subscribe class="grid grid-cols-2 gap-6 w-full text-base">
                <div @click="$store.basket.collection = false"
                    class="group flex w-full items-center cursor-pointer select-none p-4 rounded-md transition-all duration-150 ease-in-out"
                    x-bind:class="{
                        'border-2 border-gray-100 bg-background-lighter text-gray-600': $store.basket.collection,
                        'border-2 border-blue-500 bg-blue-100 text-blue-600': ! $store.basket.collection,
                    }">
                    <span class="form-radio mr-4" x-bind:checked="! $store.basket.collection">
                        <i></i>
                    </span>

                    <span class="font-medium flex-1 inline-flex items-center">
                        Home Delivery
                    </span>
                </div>

                <div @click="$store.basket.collection = true"
                    class="group flex w-full items-center cursor-pointer select-none p-4 rounded-md transition-all duration-150 ease-in-out"
                    x-bind:class="{
                        'border-2 border-gray-100 bg-background-lighter text-gray-600': ! $store.basket.collection,
                        'border-2 border-blue-500 bg-blue-100 text-blue-600': $store.basket.collection,
                    }">
                    <span class="form-radio mr-4" x-bind:checked="$store.basket.collection">
                        <i></i>
                    </span>

                    <span class="font-medium flex-1 inline-flex items-center">
                        Collection
                    </span>
                </div>
            </div>
        </div>

        <div x-data="{}" x-subscribe x-show="! $store.basket.collection" class="p-6">
            <div class="flex w-full items-center mb-4 leading-none text-gray-800 select-none">
                <span class="flex-1 text-lg">Choose a delivery address</span>
                <button class="inline-flex items-center text-blue-600 hover:text-blue-500 uppercase text-sm font-medium">
                    @svg('add-outline', 'w-4 h-4 fill-current mr-2')
                    <span>Add Address</span>
                </button>
            </div>

            <div class="grid grid-cols-2 gap-6 w-full text-base mt-6">
                @foreach ($addresses as $address)
                    <div @click="$store.basket.addressId = addressId" x-subscribe x-data="{ addressId: {{ $address->id }} }"
                        class="group flex w-full items-center cursor-pointer select-none p-4 rounded-md transition-all duration-150 ease-in-out"
                        x-bind:class="{
                            'border-2 border-gray-100 bg-background-lighter text-gray-600': $store.basket.addressId !== addressId,
                            'border-2 border-blue-500 bg-blue-100 text-blue-600': $store.basket.addressId === addressId,
                        }">
                        <span class="form-radio mr-4" x-bind:checked="$store.basket.addressId === addressId">
                            <i></i>
                        </span>

                        <span class="font-medium flex-1 inline-flex items-center">
                            {{ $address->line1 }}
                            @if ($address->primary)
                                <span class="text-xs ml-2 opacity-75">(default)</span>
                            @endif
                        </span>

                        <button class="opacity-0 group-hover:opacity-100 inline-flex items-center justify-center rounded-full w-6 h-6 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-150 ease-in-out">
                            @svg('edit-pencil', 'w-3 h-3 fill-current')
                        </button>
                    </div>
                @endforeach
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
</div>
--}}
