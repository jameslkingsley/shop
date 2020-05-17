@extends('layouts.app')

@section('content')
    <div class="block w-full mb-8 text-center">
        <span class="w-full text-xl sm:text-2xl font-bold">To start, pick a category.</span>
        <p class="text-gray-600">You can choose which items you would like, place your order online, and we'll deliver it to your door!</p>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        @foreach($groups as $group)
            <a href="{{ url('/group/' . $group->id) }}" class="inline-block bg-white rounded shadow hover:shadow-lg transform hover:scale-105 p-4 text-base text-black transition-all duration-150 ease-in-out">
                <div class="block w-full h-32 bg-white rounded flex items-center justify-center mb-4 text-gray-500 text-xs">
                    <img src="{{ $group->image }}" alt="No image available" class="h-32" />
                </div>

                <span class="w-full text-lg font-semibold leading-snug">{{ $group->title }}</span>
            </a>
        @endforeach
    </div>
@endsection
