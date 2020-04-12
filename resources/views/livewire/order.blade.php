<div>
    <div wire:click="$set('expanded', false)" class="{{ $expanded ? 'block lg:hidden' : 'hidden' }} fixed inset-0 bg-blue-500 opacity-25 z-20"></div>

    <div wire:loading.class="pointer-events-none"
        class="{{ $order->group ? "border-t-2 border-{$order->group}-400" : '' }} {{ $expanded ? 'fixed lg:relative bottom-0 left-0 right-0 z-40 shadow-lg max-h-order lg:max-h-auto rounded-t-lg lg:rounded overflow-y-auto' : 'my-4' }} order flex flex-wrap w-full items-center sm:my-4 bg-white shadow sm:rounded hover:shadow-md">

        <div wire:click="$toggle('expanded')" class="{{ $expanded ? 'sticky top-0 border-b border-gray-200' : 'relative' }} bg-white lg:bg-transparent z-10 inline-flex flex-1 items-start p-4 2xl:p-6 cursor-pointer select-none">
            @if (! $order->charged_at && ! $order->delivered_at)
                @svg('shopping-cart', 'hidden xl:inline-block size-5 text-gray-300 mr-4 mt-1')
            @endif

            @if ($order->charged_at && ! $order->delivered_at)
                <div class="absolute left-0 top-0 bottom-0 flex flex-col items-center justify-center pl-3 2xl:pl-5">
                    <span wire:click.stop.prevent="increaseOrder" class="transform hover:scale-110 duration-200 ease-in-out cursor-pointer select-none">
                        @svg('cheveron-up', 'size-5 text-blue-200 hover:text-blue-500')
                    </span>

                    <span>{{ $order->order }}</span>

                    <span wire:click.stop.prevent="decreaseOrder" class="transform hover:scale-110 duration-200 ease-in-out cursor-pointer select-none">
                        @svg('cheveron-down', 'size-5 text-blue-200 hover:text-blue-500')
                    </span>
                </div>
            @endif

            @if ($order->charged_at && $order->delivered_at)
                @svg('thumbs-up', 'hidden xl:inline-block size-5 text-gray-300 mr-4 mt-1')
            @endif

            <div class="{{ ($order->charged_at && ! $order->delivered_at) ? 'ml-6 2xl:ml-8' : '' }} flex-1 inline-flex flex-col text-sm 2xl:text-base">
                <span class="font-bold truncate">
                    {{ $order->metadata->shipping->name }}
                    &mdash;
                    <a href="tel:{{ $order->metadata->shipping->phone }}" class="text-xs font-normal">
                        {{ $order->metadata->shipping->phone }}
                    </a>
                </span>

                @if ($order->charged_at && ! $order->delivered_at)
                    <div class="inline-flex flex-row items-center text-xs 2xl:text-sm text-gray-700">
                        <span>
                            {{ $order->metadata->shipping->address->line1 }},
                            {{ $order->metadata->shipping->address->line2 }},
                            {{ $order->metadata->shipping->address->postal_code }}
                        </span>
                    </div>
                @else
                    <div class="inline-flex flex-row items-center text-xs 2xl:text-sm text-gray-600">
                        <span class="hidden sm:inline-block">{{ $order->created_at->shortRelativeToNowDiffForHumans() }}</span>
                        <span class="hidden sm:inline-block mx-2">&middot;</span>
                        <a href="tel:{{ $order->metadata->shipping->phone }}">{{ $order->metadata->shipping->phone }}</a>
                    </div>
                @endif
            </div>

            @if ($order->picking_at && ! $order->delivered_at)
                <div class="whitespace-no-wrap inline-flex items-center justify-center mt-1 mr-2 flex-col ml-4 text-right">
                    <span wire:click.stop.prevent="increaseBags" class="transform hover:scale-110 duration-200 ease-in-out cursor-pointer select-none">
                        @svg('cheveron-up', 'size-5 text-blue-200 hover:text-blue-500')
                    </span>

                    <span wire:click.stop.prevent="decreaseBags" class="transform hover:scale-110 duration-200 ease-in-out cursor-pointer select-none">
                        @svg('cheveron-down', 'size-5 text-blue-200 hover:text-blue-500')
                    </span>
                </div>

                <div class="whitespace-no-wrap inline-flex flex-col text-right font-number">
                    <span class="text-xs text-gray-600"># of bags</span>
                    <span class="font-bold text-sm 2xl:text-base">{{ $order->bags }} bags</span>
                </div>
            @else
                <div class="whitespace-no-wrap inline-flex flex-col text-right font-number ml-4">
                    <span class="text-xs text-gray-600">
                        {{ $order->charged_at ? 'Total paid' : 'Total to pay' }}
                    </span>

                    <span class="font-bold text-sm 2xl:text-base">&pound;{{ number_format($order->total / 100, 2) }}</span>
                </div>
            @endif

            @if ($order->charged_at && ! $order->delivered_at)
                <div class="whitespace-no-wrap inline-flex flex-wrap items-center justify-end ml-4" style="width: 36px;">
                    @foreach ($groups->chunk(2) as $chunk)
                        <div class="flex items-center justify-end">
                            @foreach ($chunk as $group)
                                <span wire:click.prevent.stop="assignToGroup('{{ $group }}')"
                                    class="{{ $order->group === $group ? "bg-{$group}-400" : '' }} {{ "border-{$group}-400 hover:bg-{$group}-400" }} m-px w-4 2xl:w-5 h-4 2xl:h-5 border-4 rounded-full transform hover:scale-110 duration-200 ease-in-out transition-all">
                                </span>
                            @endforeach
                        </div>
                    @endforeach
                </div>
            @endif

            @if (! $order->charged_at)
                @if ($order->picking_at)
                    <div class="bg-blue-200 text-white rounded-full w-10 h-10 ml-4 inline-flex flex-wrap items-center justify-center">
                        @svg('three-dots', 'size-5 fill-current')
                    </div>
                @else
                    <div wire:click.stop.prevent="startPicking" class="cursor-pointer select-none bg-blue-500 text-white rounded-full w-10 h-10 ml-4 inline-flex flex-wrap items-center justify-center">
                        @svg('hand-pointer', 'size-5 fill-current')
                    </div>
                @endif
            @endif
        </div>

        @if ($expanded)
            <div class="block w-full">
                <div class="flex flex-wrap justify-between items-start w-full p-4 2xl:p-6 border-b border-gray-200">
                    <div class="inline-flex w-1/2 flex-col text-xs 2xl:text-sm">
                        <span class="font-bold">Address</span>
                        <span>{{ $order->metadata->shipping->address->line1 }}</span>
                        <span>{{ $order->metadata->shipping->address->line2 }}</span>
                        <span>{{ $order->metadata->shipping->address->city }}, {{ $order->metadata->shipping->address->country }}</span>
                        <span>{{ $order->metadata->shipping->address->postal_code }}</span>
                    </div>

                    <div class="inline-flex w-1/2 flex-col text-xs 2xl:text-sm">
                        <span class="font-bold">Contact Info</span>
                        <span>{{ $order->metadata->shipping->name }}</span>
                        <a href="tel:{{ $order->metadata->shipping->phone }}">{{ $order->metadata->shipping->phone }}</a>
                        <a href="mailto:{{ $order->metadata->email }}">{{ $order->metadata->email }}</a>
                    </div>

                    @if ($order->comment)
                        <div class="inline-flex w-full flex-col text-xs 2xl:text-sm mt-4">
                            <span class="font-bold">Additional Comments</span>
                            <span>{{ $order->comment }}</span>
                        </div>
                    @endif

                    <div class="inline-flex w-full flex-col text-sm mt-4">
                        <div class="text-left select-none">
                            @if ($order->charged_at)
                                <span class="text-green-500 mr-4">Paid &checkmark;</span>
                            @else
                                @if ($order->payment_method_id)
                                    <button wire:click="takePayment" wire:loading.attr="disabled" class="px-4 mr-2 btn-white">
                                        Take Payment
                                    </button>
                                @else
                                    <div class="block w-full p-4 rounded border border-yellow-300 bg-yellow-100 select-none transition-all duration-300 ease-in-out">
                                        <p class="text-yellow-800 font-bold pb-2">Missing Payment Method</p>
                                        <p class="text-sm">This order is missing a payment method. You can take payment manually through Stripe, and then confirm the payment has been received here.</p>

                                        <div class="flex items-center w-full mt-4">
                                            <button class="btn-white text-2xs p-0">
                                                <a href="{{ "https://dashboard.stripe.com/customers/{$order->customer_id}" }}" target="_blank" class="inline-block px-2 py-1">
                                                    Take Payment
                                                </a>
                                            </button>

                                            <span class="flex-1 px-4 font-bold">then confirm the payment &rarr;</span>

                                            <button wire:click="confirmPayment" wire:loading.attr="disabled" class="px-2 btn-white text-2xs py-1">
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                @endif
                            @endif

                            @if ($order->delivered_at)
                                <button wire:click="markAsUndelivered" wire:loading.attr="disabled" class="px-3 btn-white">
                                    Un-Delivered &cross;
                                </button>
                            @elseif ($order->charged_at)
                                <button wire:click="markAsDelivered" wire:loading.attr="disabled" class="px-3 btn-white">
                                    Delivered &checkmark;
                                </button>
                            @endif
                        </div>

                        <div class="inline-flex text-xs justify-start text-gray-500 mt-2">
                            <span class="hidden 2xl:block">Stripe Customer:&nbsp;&nbsp;</span>
                            <span>{{ $order->customer_id }}</span>
                        </div>
                    </div>
                </div>

                <div class="block w-full p-4 2xl:p-6 text-xs 2xl:text-sm overflow-x-auto">
                    <span class="block w-full font-bold mb-2">Order Items</span>

                    @forelse ($order->items as $item)
                        @livewire('order-item', compact('item'), key($item->id))
                    @empty
                        <span>No items in order.</span>
                    @endforelse

                    @if (! $order->charged_at)
                        <div class="flex flex-wrap w-full items-center text-sm mt-3">
                            <input wire:model="searchQuery" placeholder="Search for a product to add (title or id)"
                                class="border rounded px-1 focus:border-gray-400 w-full mb-2" />

                            @forelse ($searchResults as $product)
                                <div class="inline-flex w-full items-center mb-1">
                                    <span wire:click="addProductToOrder({{ $product->id }})" class="flex-1 text-left mr-4 underline">{{ $product->title }}</span>

                                    <div class="inline-flex items-center justify-end">
                                        <span class="inline-block text-left w-12 mr-4">{{ $product->unit_size }}</span>
                                        <span class="font-number text-right w-12">&pound;{{ number_format($product->price / 100, 2) }}</span>
                                    </div>
                                </div>
                            @empty
                                @if ($searchQuery)
                                    <span class="block w-full mt-2 text-xs">No search results.</span>
                                @endif
                            @endforelse
                        </div>
                    @endif

                    <div class="flex w-full items-center text-xs 2xl:text-sm mb-1 mt-2 justify-end">
                        <span class="font-bold">Sub-total</span>
                        <span class="w-12 ml-4 text-right font-number">&pound;{{ number_format($order->subTotal / 100, 2) }}</span>
                    </div>

                    <div class="flex w-full items-center text-xs 2xl:text-sm mb-1 justify-end">
                        <span class="font-bold">Delivery fee</span>
                        <span class="w-12 ml-4 text-right font-number">&pound;{{ number_format($order->deliveryFee / 100, 2) }}</span>
                    </div>

                    <div class="flex w-full items-center text-xs 2xl:text-sm justify-end">
                        <span class="font-bold">Total</span>
                        <span class="w-12 ml-4 text-right font-number">&pound;{{ number_format($order->total / 100, 2) }}</span>
                    </div>
                </div>
            </div>
        @endif
    </div>
</div>
