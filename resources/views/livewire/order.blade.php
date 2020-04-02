<div wire:loading.class="opacity-50 pointer-events-none"
    class="{{ $order->group ? "border-t-2 border-{$order->group}-400" : '' }} order flex flex-wrap w-full items-center my-4 bg-white shadow rounded hover:shadow-md transition-all duration-200 ease-in-out">
    <div wire:click="$toggle('expanded')" class="relative inline-flex flex-1 items-start p-4 2xl:p-6 cursor-pointer select-none">
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
            <span class="font-bold">{{ $order->metadata->shipping->name }}</span>

            <div class="inline-flex flex-row items-center text-xs 2xl:text-sm text-gray-600">
                <span class="hidden sm:inline-block">{{ $order->created_at->shortRelativeToNowDiffForHumans() }}</span>
                <span class="hidden sm:inline-block mx-2">&middot;</span>
                <span>{{ $order->metadata->shipping->phone }}</span>
            </div>
        </div>

        @unless ($order->charged_at && $order->delivered_at)
            <div class="inline-flex items-center justify-center mt-1 mr-2 flex-col ml-8 text-right">
                <span wire:click.stop.prevent="increaseBags" class="transform hover:scale-110 duration-200 ease-in-out cursor-pointer select-none">
                    @svg('cheveron-up', 'size-5 text-blue-200 hover:text-blue-500')
                </span>

                <span wire:click.stop.prevent="decreaseBags" class="transform hover:scale-110 duration-200 ease-in-out cursor-pointer select-none">
                    @svg('cheveron-down', 'size-5 text-blue-200 hover:text-blue-500')
                </span>
            </div>
        @endunless

        <div class="inline-flex flex-col text-right font-number">
            <span class="text-xs text-gray-600"># of bags</span>
            <span class="font-bold text-sm 2xl:text-base">{{ $order->bags }} bags</span>
        </div>

        <div class="inline-flex flex-col text-right font-number ml-8">
            <span class="text-xs text-gray-600">Total to pay</span>
            <span class="font-bold text-sm 2xl:text-base">&pound;{{ number_format($order->total / 100, 2) }}</span>
        </div>

        @unless ($order->charged_at && $order->delivered_at)
            <div class="hidden sm:inline-flex flex-wrap items-center justify-end">
                @foreach ($groups->chunk(2) as $chunk)
                    <div class="flex w-full items-center justify-end">
                        @foreach ($chunk as $group)
                            <span wire:click.prevent.stop="assignToGroup('{{ $group }}')"
                                class="{{ $order->group === $group ? "bg-{$group}-400" : '' }} {{ "border-{$group}-400 hover:bg-{$group}-400" }} m-px w-4 2xl:w-5 h-4 2xl:h-5 border-4 rounded-full transform hover:scale-110 duration-200 ease-in-out transition-all">
                            </span>
                        @endforeach
                    </div>
                @endforeach
            </div>
        @endunless
    </div>

    @if ($expanded)
        <div class="block w-full border-t border-gray-200">
            <div class="flex justify-between items-start w-full p-4 2xl:p-6 border-b border-gray-200">
                <div class="inline-flex flex-col text-xs 2xl:text-sm">
                    <span class="font-bold">Address</span>
                    <span>{{ $order->metadata->shipping->address->line1 }}</span>
                    <span>{{ $order->metadata->shipping->address->line2 }}</span>
                    <span>{{ $order->metadata->shipping->address->city }}, {{ $order->metadata->shipping->address->country }}</span>
                    <span>{{ $order->metadata->shipping->address->postal_code }}</span>
                </div>

                <div class="inline-flex flex-col text-xs 2xl:text-sm">
                    <span class="font-bold">Contact Info</span>
                    <span>{{ $order->metadata->shipping->name }}</span>
                    <span>{{ $order->metadata->shipping->phone }}</span>
                    <span>{{ $order->metadata->email }}</span>
                </div>

                <div class="inline-flex flex-col text-sm">
                    <div class="text-right select-none">
                        @if ($order->charged_at)
                            <span class="text-green-500 mr-4">Paid &checkmark;</span>
                        @else
                            <button wire:click="takePayment" wire:loading.attr="disabled" class="px-4 ml-2 btn-white">
                                Take Payment
                            </button>
                        @endif

                        @if ($order->delivered_at)
                            <span class="text-green-500">Delivered &checkmark;</span>
                        @elseif ($order->charged_at)
                            <button wire:click="markAsDelivered" wire:loading.attr="disabled" class="px-3 btn-white">
                                Delivered &checkmark;
                            </button>
                        @endif
                    </div>

                    <div class="inline-flex text-xs justify-end text-gray-500 mt-2">
                        <span class="hidden 2xl:block">Stripe Customer:&nbsp;&nbsp;</span>
                        <span>{{ $order->customer_id }}</span>
                    </div>
                </div>
            </div>

            <div class="block w-full p-4 2xl:p-6 text-xs 2xl:text-sm">
                <span class="block w-full font-bold mb-2">Order Items</span>

                @forelse ($order->items as $item)
                    @livewire('order-item', compact('item'), key($item->id))
                @empty
                    <span>No items in order.</span>
                @endforelse

                @if (! $order->charged_at)
                    <div class="flex w-full items-center text-sm mt-3">
                        <span class="text-left font-number">
                            <input wire:model="productId" wire:keydown.enter="createOrderItem"
                                placeholder="EPOS Product ID" class="border rounded px-1 focus:border-gray-400 text-xs" />
                        </span>

                        <span class="text-xs text-gray-600 ml-2 truncate">Enter a product ID and hit enter.</span>
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
