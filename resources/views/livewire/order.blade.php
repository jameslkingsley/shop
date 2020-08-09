<div>
    <div x-data="{ options: false, cancelling: false }" x-subscribe class="flex items-center w-full mb-8">
        <div class="flex-1">
            <a href="{{ route('orders') }}" class="text-sm text-gray-500 hover:text-blue-600 transition-all duration-200 ease-in-out">
                &larr; Back to orders
            </a>

            <h1 class="w-full text-xl sm:text-2xl font-bold">Your Order</h1>
        </div>

        <div class="flex items-center justify-end space-x-8">
            <div class="inline-flex flex-col leading-none space-y-2 text-right">
                <span class="text-sm text-gray-500">Total {{ $order->charged_at ? 'paid' : 'to pay' }}</span>
                <span class="font-bold text-2xl">{{ $order->total_formatted }}</span>
            </div>

            @if (! $order->cancelled_at)
                <div class="inline-flex items-center justify-end space-x-2">
                    <button x-on:click="Basket.editOrder({{ json_encode($order) }})"
                        @if ($order->picking_at) disabled @endif class="btn">
                        Edit Order
                    </button>

                    <div class="relative">
                        <div>
                            <button x-on:click="options = ! options" class="btn py-3">
                                <x:icon-cheveron-down class="w-4 h-4 fill-current" x-show="! options" />
                                <x:icon-cheveron-up class="w-4 h-4 fill-current" x-show="options" />
                            </button>
                        </div>

                        <div x-show="options" x-on:click.away="options = false"
                            x-transition:enter="transition ease-out duration-100"
                            x-transition:enter-start="transform opacity-0 scale-95"
                            x-transition:enter-end="transform opacity-100 scale-100"
                            x-transition:leave="transition ease-in duration-75"
                            x-transition:leave-start="transform opacity-100 scale-100"
                            x-transition:leave-end="transform opacity-0 scale-95"
                            class="origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg">

                            <div class="py-1 rounded-md bg-white shadow-xs">
                                <button @if (! $order->picking_at) x-on:click="cancelling = true; options = false" @endif class="{{ $order->picking_at ? 'opacity-50 pointer-events-none cursor-default select-none' : '' }} block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-left">Cancel Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            @endif
        </div>

        @if (! $order->cancelled_at && ! $order->picking_at)
            <div x-show="cancelling" class="fixed bottom-0 inset-x-0 px-4 pb-4 sm:inset-0 sm:flex sm:items-center sm:justify-center">
                <div x-show="cancelling" class="fixed inset-0 transition-opacity"
                    x-transition:enter="ease-out duration-300"
                    x-transition:enter-start="opacity-0"
                    x-transition:enter-end="opacity-100"
                    x-transition:leave="ease-in duration-200"
                    x-transition:leave-start="opacity-100"
                    x-transition:leave-end="opacity-0">
                    <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
                </div>

                <div x-show="cancelling" class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full"
                    x-transition:enter="ease-out duration-300"
                    x-transition:enter-start="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    x-transition:enter-end="opacity-100 translate-y-0 sm:scale-100"
                    x-transition:leave="ease-in duration-200"
                    x-transition:leave-start="opacity-100 translate-y-0 sm:scale-100"
                    x-transition:leave-end="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>

                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                    Cancel Order
                                </h3>

                                <div class="mt-2">
                                    <p class="text-sm leading-5 text-gray-500">
                                        Are you sure you want to cancel your order? This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <span class="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
                            <button wire:click="cancel" class="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-red-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                Cancel Order
                            </button>
                        </span>

                        <span class="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
                            <button x-on:click="cancelling = false" class="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                                Keep Order
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        @endif
    </div>

    <div class="block w-full">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-6 divide-x divide-gray-100 bg-white rounded-md shadow-md">
            @include('components.order-step', [
                'number' => 1,
                'complete' => ! $order->cancelled_at,
                'cancelled' => (bool) $order->cancelled_at,
                'label' => $order->cancelled_at ? 'Cancelled' : 'Order Placed',
                'timestamp' => $order->cancelled_at ? $order->cancelled_at : $order->created_at,
            ])

            @include('components.order-step', [
                'number' => 2,
                'label' => 'Being Picked',
                'active' => $order->picking_at && ! $order->charged_at,
                'complete' => $order->picking_at && $order->charged_at,
                'timestamp' => $order->picking_at,
            ])

            @include('components.order-step', [
                'number' => 3,
                'label' => 'Out for Delivery',
                'active' => $order->charged_at && ! $order->delivered_at,
                'complete' => $order->charged_at && $order->delivered_at,
                'timestamp' => $order->charged_at,
            ])

            @include('components.order-step', [
                'number' => 4,
                'label' => 'Delivered',
                'complete' => $order->delivered_at,
                'timestamp' => $order->delivered_at,
            ])
        </div>

        <div class="block w-full mt-4 md:mt-6">
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:col-span-2">
                @foreach ($order->items as $item)
                    <div class="inline-flex flex-col bg-white shadow-md p-4 rounded-md">
                        <div class="block w-full h-32 bg-white rounded flex items-center justify-center mb-4 text-gray-500 text-xs">
                            <img src="{{ $item->product->prodImg }}" alt="No image available" class="h-32" />
                        </div>

                        <span class="w-full text-base">
                            {{ $item->product->prodTitle }}
                        </span>

                        <span class="w-full mb-4 text-2xs text-gray-500">
                            #{{ $item->product->prodID }}
                        </span>

                        <div class="flex-1 flex items-end">
                            <div class="flex flex-col w-full">
                                <span class="w-full text-xs">
                                    {{ $item->product->prodUnitSize }}
                                </span>

                                <span class="w-full font-bold">
                                    &pound;{{ number_format($item->product->prodOurPrice, 2) }}
                                </span>
                            </div>

                            <div>
                                <span class="rounded-full bg-blue-100 text-blue-600 font-semibold w-8 h-8 flex items-center justify-center">
                                    {{ $item->quantity }}
                                </span>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
