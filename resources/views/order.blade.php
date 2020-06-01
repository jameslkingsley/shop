@extends('layouts.app')

@section('content')
    <div>
        Your order {{ $order->id }}

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:col-span-2">
            @foreach ($order->items as $item)
                <div class="inline-flex flex-col bg-white shadow p-4 rounded-md">
                    <div class="block w-full h-32 bg-white rounded flex items-center justify-center mb-4 text-gray-500 text-xs">
                        <img src="{{ $item->product->prodImg }}" alt="No image available" class="h-32" />
                    </div>

                    <span class="w-full text-sm">
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
                    </div>
                </div>
            @endforeach
        </div>
    </div>
@endsection
