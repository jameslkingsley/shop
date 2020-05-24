@extends('layouts.app')

@section('content')
    <div class="flex items-center w-full mb-8">
        <div class="flex-1">
            <a href="{{ url('/') }}" class="text-sm text-gray-500 hover:text-blue-600 transition-all duration-200 ease-in-out">
                &larr; Continue shopping
            </a>

            <h1 class="w-full text-xl sm:text-2xl font-bold">Your Basket</h1>
        </div>

        <div class="inline-flex flex-col text-right mr-6">
            <span class="text-sm text-gray-500">Total to pay</span>
            <span x-text="toCurrency(Basket.total())" class="text-xl font-semibold"></span>
        </div>

        <a href="{{ route('checkout') }}" class="btn btn-lg">
            Checkout &rarr;
        </a>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <template x-for="item in _.values($store.basket.items)">
            @include('components.product', ['alpine' => 'item'])
        </template>
    </div>
@endsection
