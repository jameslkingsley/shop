@extends('layouts.app')

@section('content')
    <div class="flex items-center w-full mb-8">
        <div class="flex-1">
            <a href="{{ route('home') }}" class="text-sm text-gray-500 hover:text-blue-600 transition-all duration-200 ease-in-out">
                &larr; Continue shopping
            </a>

            <h1 class="w-full text-xl sm:text-2xl font-bold">Your Account Settings</h1>
        </div>
    </div>

    <div class="grid grid-cols-4 divide-x divide-gray-100 bg-white rounded-md shadow-md">
        <div class="overflow-hidden rounded-l-md py-4">
            @foreach ([
                'settings.cards' => 'Payment Methods',
                'settings.addresses' => 'Delivery Addresses',
            ] as $route => $label)
                <a href="{{ route($route) }}" class="{{ request()->route()->named($route) ? 'font-bold text-blue-600 bg-background' : '' }} block px-6 py-3 text-sm text-gray-800 hover:bg-background-lighter">
                    {{ $label }}
                </a>
            @endforeach
        </div>

        <div class="col-span-3 p-6">
            @yield('body')
        </div>
    </div>
@endsection
