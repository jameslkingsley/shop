@extends('layouts.app')

@section('content')
    @include('layouts.header', [
        'parent' => 'categories',
        'parent_url' => url('/'),
        'title' => $group->pgTitle,
        'description' => $group->pgDescription,
    ])

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        @foreach($categories as $category)
            <a href="{{ url('/group/' . $group->getKey() . '/' . $category->id) }}" class="inline-block bg-white rounded shadow hover:shadow-lg transform hover:scale-105 p-4 text-base text-black transition-all duration-150 ease-in-out">
                <div class="block w-full h-32 bg-white rounded flex items-center justify-center mb-4 text-gray-500 text-xs">
                    <img src="{{ $category->image }}" alt="No image available" class="h-32" />
                </div>

                <span class="w-full text-lg font-semibold leading-snug">{{ $category->title }}</span>
            </a>
        @endforeach
    </div>
@endsection
