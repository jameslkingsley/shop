@extends('layouts.app')

@section('head')
    <script src="https://js.stripe.com/v3" async></script>
@endsection

@section('scripts')
    <script>
        window.livewire.on('orderPlaced', orderId => {
            Basket.clear()
            Turbolinks.visit('/orders/' + orderId)
        })
    </script>
@endsection

@section('content')
    <div class="flex items-center w-full mb-8">
        <div class="flex-1">
            <a href="{{ url('/') }}" class="text-sm text-gray-500 hover:text-blue-600 transition-all duration-200 ease-in-out">
                &larr; Continue shopping
            </a>

            <h1 class="w-full text-xl sm:text-2xl font-bold">Your Basket</h1>
        </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div class="lg:col-span-2">
            <div x-data x-subscribe class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                <template x-for="item in Basket.items()">
                    @include('components.product')
                </template>
            </div>
        </div>

        <livewire:checkout />
    </div>
@endsection
