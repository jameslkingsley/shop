@extends('layouts.app')

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
        <div x-data="{}" x-subscribe class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:col-span-2">
            <template x-for="item in Basket.items()">
                @include('components.product')
            </template>
        </div>

        @include('checkout')
    </div>
@endsection
