<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="antialiased">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>
            Print Order #{{ $order->id }}
        </title>

        <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>

    <body class="text-gray-900 leading-normal text-sm">
        <div class="order flex flex-wrap w-full items-center border-b-2 border-black" style="break-before: page;">
            <div class="z-10 inline-flex flex-1 items-start p-6 cursor-pointer select-none">
                <div class="flex-1 inline-flex flex-col">
                    <span class="font-bold truncate">{{ $order->metadata->shipping->name }}</span>

                    <div class="inline-flex flex-row items-center text-gray-600">
                        <span>{{ $order->metadata->shipping->phone }}</span>
                    </div>
                </div>

                <div class="whitespace-no-wrap inline-flex flex-col text-right font-number">
                    <span class="text-sm text-gray-600"># of bags</span>
                    <span class="font-bold">{{ $order->bags }} bags</span>
                </div>

                <div class="whitespace-no-wrap inline-flex flex-col text-right font-number ml-4">
                    <span class="text-sm text-gray-600">
                        {{ $order->charged_at ? 'Total paid' : 'Total to pay' }}
                    </span>

                    <span class="font-bold">
                        &pound;{{ number_format($order->total / 100, 2) }}
                    </span>
                </div>
            </div>

            <div class="block w-full">
                <div class="flex flex-wrap justify-between items-start w-full p-6 border-b border-gray-200">
                    <div class="inline-flex w-1/2 flex-col">
                        <span class="font-bold">Address</span>
                        <span>{{ $order->metadata->shipping->address->line1 }}</span>
                        <span>{{ $order->metadata->shipping->address->line2 }}</span>
                        <span>{{ $order->metadata->shipping->address->city }}, {{ $order->metadata->shipping->address->country }}</span>
                        <span>{{ $order->metadata->shipping->address->postal_code }}</span>
                    </div>

                    <div class="inline-flex w-1/2 flex-col">
                        <span class="font-bold">Contact Info</span>
                        <span>{{ $order->metadata->shipping->name }}</span>
                        <span>{{ $order->metadata->shipping->phone }}</span>
                        <span>{{ $order->metadata->email }}</span>
                    </div>

                    @if ($order->comment)
                        <div class="inline-flex w-full flex-col mt-4">
                            <span class="font-bold">Additional Comments</span>
                            <span>{{ $order->comment }}</span>
                        </div>
                    @endif
                </div>

                <div class="block w-full p-6 overflow-x-auto">
                    <span class="block w-full font-bold mb-2">Order Items</span>

                    @forelse ($order->items->where('quantity') as $item)
                        <div class="flex w-full items-center mb-1 whitespace-no-wrap overflow-visible">
                            <span
                                class="inline-block text-left min-w-1/2 mr-2">{{ $item->product->prodTitle }}</span>
                            <span class="inline-block text-left w-12">{{ $item->product->prodUnitSize }}</span>

                            <div class="flex-1 inline-flex items-center justify-end">
                                <span class="font-number text-right w-8">{{ $item->quantity }}</span>

                                <span class="font-number text-right ml-1 mr-2">
                                    &times;
                                </span>

                                <span class="font-number text-right w-12">
                                    &pound;{{ number_format($item->amount / 100, 2) }}
                                </span>
                            </div>
                        </div>
                    @empty
                        <span>No items in order.</span>
                    @endforelse

                    @if ($order->items->where('quantity', 0)->isNotEmpty())
                        <span class="block w-full font-bold mb-2 mt-6">Items out of stock</span>
                    @endif

                    @foreach ($order->items->where('quantity', 0) as $item)
                        <div class="flex w-full items-center mb-1 whitespace-no-wrap overflow-visible">
                            <span
                                class="inline-block text-left min-w-1/2 mr-2">{{ $item->product->prodTitle }}</span>
                            <span class="inline-block text-left w-12">{{ $item->product->prodUnitSize }}</span>

                            <div class="flex-1 inline-flex items-center justify-end">
                                <span class="font-number text-right w-8">{{ $item->quantity }}</span>

                                <span class="font-number text-right ml-1 mr-2">
                                    &times;
                                </span>

                                <span class="font-number text-right w-12">
                                    &pound;{{ number_format($item->amount / 100, 2) }}
                                </span>
                            </div>
                        </div>
                    @endforeach

                    <div class="flex w-full items-center mb-1 mt-6 justify-end">
                        <span class="font-bold">Sub-total</span>
                        <span class="w-12 ml-4 text-right font-number">
                            &pound;{{ number_format($order->subTotal / 100, 2) }}
                        </span>
                    </div>

                    <div class="flex w-full items-center mb-1 justify-end">
                        <span class="font-bold">Delivery fee</span>
                        <span class="w-12 ml-4 text-right font-number">
                            &pound;{{ number_format($order->deliveryFee / 100, 2) }}
                        </span>
                    </div>

                    <div class="flex w-full items-center justify-end">
                        <span class="font-bold">Total</span>
                        <span class="w-12 ml-4 text-right font-number">
                            &pound;{{ number_format($order->total / 100, 2) }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>
