<div x-data="Wire.Checkout({ deliveryCutOffTime: 14 })" x-subscribe>
    <div class="sticky bg-white rounded-md shadow-md overflow-hidden flex flex-col divide-y divide-gray-100" style="top: 5.5rem">
        <div class="flex flex-col">
            <div x-on:click="editPayment = ! editPayment" x-bind:class="{ 'hover:bg-background-lighter': ! editPayment }"
                class="group flex items-start p-4 md:p-6 cursor-pointer select-none transition-all duration-150 ease-in-out">
                <div class="inline-flex flex-col space-y-1 flex-1">
                    <span class="uppercase text-gray-400 text-xs font-semibold tracking-wide">Payment Method</span>

                    @if ($cardId)
                        <div x-show="! editPayment" class="inline-flex flex-col">
                            <span class="text-black font-medium">
                                {{ $this->card->name }}
                            </span>

                            <span class="text-sm">
                                {{ $this->card->brand }} ending in {{ $this->card->last_four }}
                            </span>
                        </div>
                    @else
                        <span x-show="! editPayment">Click to add payment method</span>
                    @endif
                </div>

                <button class="text-gray-500 group-hover:text-blue-500">
                    <x:icon-cheveron-down class="w-5 h-5 fill-current" x-show="! editPayment" />
                    <x:icon-cheveron-up class="w-5 h-5 fill-current" x-show="editPayment" />
                </button>
            </div>

            {{-- TODO Show card form on toggle, reload cards after adding one,
                 smooth transitions for moving between states. --}}
            <div x-show="editPayment" class="px-4 pb-4 md:pb-6 md:px-6 -mt-2">
                @if ($cards->isEmpty())
                    <livewire:card-form />
                @endif

                @if ($cards->isNotEmpty())
                    <div class="flex flex-col space-y-4 w-full">
                        @foreach ($cards as $card)
                            <div x-on:click="selectCard(@this, {{ $card->id }})"
                                class="{{ $cardId === $card->id ? 'border-2 border-blue-500' : 'border-2 border-gray-100 text-gray-500' }} group flex w-full items-start cursor-pointer select-none p-4 rounded-md transition-all duration-150 ease-in-out">
                                <span class="form-radio mr-2 flex-shrink-0" @if ($cardId === $card->id) checked @endif>
                                    <i></i>
                                </span>

                                <div class="flex-1 inline-flex flex-col">
                                    <span class="font-medium text-base leading-none">
                                        {{ $card->name }}
                                    </span>

                                    <span class="text-sm leading-none mt-2">
                                        {{ $card->brand }} ending in {{ $card->last_four }}
                                    </span>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @endif
            </div>
        </div>

        <div class="flex flex-col">
            <div x-on:click="editDelivery = ! editDelivery" class="group flex items-start p-4 md:p-6 cursor-pointer select-none transition-all duration-150 ease-in-out" x-bind:class="{ 'hover:bg-background-lighter': ! editDelivery }">
                <div class="inline-flex flex-col space-y-1 flex-1">
                    <span class="uppercase text-gray-400 text-xs font-semibold tracking-wide">Delivery Method</span>
                    <div x-show="! editDelivery" class="inline-flex flex-col">
                        <span class="text-black font-medium">
                            {{ $collection ? 'Collection' : 'Home Delivery' }}
                        </span>

                        <span class="text-sm">
                            {{ now()->parse($deliveryDate)->format('jS M') }}

                            @if (! $collection && $this->address)
                            &middot; {{ $this->address->line1 }}, {{ $this->address->line2 }}
                            @elseif ($collection)
                            &middot; Church Road, Shortlanesend
                            @endif
                        </span>
                    </div>
                </div>

                <button class="text-gray-500 group-hover:text-blue-500">
                    <x:icon-cheveron-down class="w-5 h-5 fill-current" x-show="! editDelivery" />
                    <x:icon-cheveron-up class="w-5 h-5 fill-current" x-show="editDelivery" />
                </button>
            </div>

            <div x-show="editDelivery" class="px-4 pb-4 md:pb-6 md:px-6 -mt-2">
                <div class="form-switch mb-6">
                    <span x-on:click="@this.set('collection', false)" @if (! $collection) active @endif>Home Delivery</span>
                    <span x-on:click="@this.set('collection', true)" @if ($collection) active @endif>Collection</span>
                </div>

                <div class="{{ $collection ? 'flex' : 'hidden' }} group w-full items-start select-none p-4 rounded-md border-2 border-blue-500 transition-all duration-150 ease-in-out">
                    <x:icon-home class="w-4 h-4 mr-2 flex-shrink-0 fill-current text-blue-500" />

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

                <div class="{{ ! $collection ? 'flex' : 'hidden' }} flex flex-col space-y-4 w-full">
                    @if ($addresses->isNotEmpty())
                        @foreach ($addresses as $address)
                            <div x-on:click="selectAddress(@this, {{ $address->id }})" class="{{ $addressId === $address->id ? 'border-2 border-blue-500' : 'border-2 border-gray-100 text-gray-500' }} group flex w-full items-start cursor-pointer select-none p-4 rounded-md transition-all duration-150 ease-in-out">
                                <span class="form-radio mr-2 flex-shrink-0" @if ($addressId === $address->id) checked @endif>
                                    <i></i>
                                </span>

                                <div class="flex-1 inline-flex flex-col">
                                    <span class="font-medium text-base leading-none">
                                        {{ $address->name }}
                                    </span>

                                    <span class="text-sm leading-normal mt-2">
                                        {{ $address->line1 }},
                                        {{ $address->line2 }}
                                        <br />
                                        {{ $address->city }},
                                        {{ $address->postcode }}
                                        <br />
                                        {{ $address->telephone }}
                                    </span>
                                </div>
                            </div>
                        @endforeach
                    @else
                        <livewire:address-form />
                    @endif
                </div>

                <span class="block w-full mt-6 mb-4 uppercase text-gray-400 text-xs font-semibold tracking-wide">Delivery Date</span>

                <div class="flex w-full select-none">
                    <button x-on:click="deliveryDateWeekIndex = Math.max(0, deliveryDateWeekIndex - 1)"
                        x-bind:class="{ 'opacity-50 pointer-events-none': deliveryDateWeekIndex === 0 }"
                        class="btn btn-sm btn-gray flex-shrink-0">
                        <x:icon-arrow-left class="w-8 h-3 my-1 fill-current" />
                    </button>

                    <span x-text="currentDeliveryWeek()"
                        class="inline-flex items-center flex-1 justify-center font-medium">
                    </span>

                    <button x-on:click="deliveryDateWeekIndex = Math.min(4, deliveryDateWeekIndex + 1)"
                        x-bind:class="{ 'opacity-50 pointer-events-none': deliveryDateWeekIndex === 4 }"
                        class="btn btn-sm btn-gray flex-shrink-0">
                        <x:icon-arrow-right class="w-8 h-3 my-1 fill-current" />
                    </button>
                </div>

                <div class="mt-2 grid grid-cols-6 w-full rounded-md bg-gray-100 p-1 gap-1">
                    <template x-for="day in availableDeliveryDates()">
                        <div x-on:click="@this.set('deliveryDate', day.format('YYYY-MM-DD'))"
                            class="flex flex-col leading-none py-2 items-center justify-center bg-white rounded cursor-pointer select-none transition-all duration-150 ease-in-out"
                            x-bind:class="{
                                'bg-blue-500 text-white': '{{ $deliveryDate }}' === day.format('YYYY-MM-DD'),
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
                        <input wire:model="substitutions" id="allow_substitutions" type="checkbox" class="form-checkbox h-4 w-4 text-blue-500 transition duration-150 ease-in-out" />
                        <label for="allow_substitutions" class="m-0 ml-2 block text-sm leading-5 text-gray-900">
                            Allow Substitutions
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-wrap items-start p-4 md:p-6 select-none transition-all duration-150 ease-in-out">
            @if ($errors->isNotEmpty())
                <div class="flex w-full flex-wrap mb-4 items-start text-xs text-red-600">
                    <span class="block w-full">
                        @foreach ($errors->all() as $message)
                            {{ $message }}
                        @endforeach
                    </span>
                </div>
            @endif

            @if ($errorMessage)
                <div class="flex w-full flex-wrap mb-4 items-start text-xs text-red-600">
                    <span class="block w-full">{{ $errorMessage }}</span>
                </div>
            @endif

            <div class="inline-flex items-end space-x-4 flex-1">
                <div class="inline-flex flex-col">
                    <span class="text-gray-400 text-sm font-semibold leading-none mb-2">Total to pay</span>
                    <span class="text-2xl font-normal font-number leading-none" x-text="toCurrency(Basket.total())"></span>
                </div>

                <div class="flex-1 text-right">
                    <button x-bind:disabled="! Basket.canPlaceOrder({{ json_encode($this->canPlaceOrder) }})" wire:click="placeOrder(Basket.items(), Basket.orderId())" wire:loading.attr="disabled"
                        class="inline-flex items-center justify-center btn btn-lg">
                        <x:icon-lock-closed class="w-4 h-4 fill-current mr-2" />
                        <span x-show="! Basket.isEditingOrder()">Place Order</span>
                        <span x-show="Basket.isEditingOrder()">Update Order</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
