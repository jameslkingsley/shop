@extends('layouts.app')

@section('content')
    @include('layouts.header', [
        'parent' => $group->pgTitle,
        'title' => $category->pcatTitle,
        'description' => $category->pcatDescription,
        'parent_url' => url('/group/' . $group->getKey()),
    ])

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        @foreach($products as $product)
            <div class="inline-flex flex-col bg-white shadow p-4 rounded">
                <div class="block w-full h-32 bg-white rounded flex items-center justify-center mb-4 text-gray-500 text-xs">
                    <img src="{{ "https://sle-shop.s3.eu-west-2.amazonaws.com/images/{$product->ref}.jpg" }}" alt="No image available" class="h-32" />
                </div>

                <span class="w-full text-sm">{{ $product->title }}</span>
                <span class="w-full mb-4 text-2xs text-gray-500">#{{ $product->id }}</span>

                <div class="flex-1 flex items-end">
                    <div class="flex flex-col w-full">
                        <span class="w-full text-xs">{{ $product->unit_size }}</span>
                        <span class="w-full font-bold">&pound;{{ number_format($product->price / 100, 2) }}</span>

                        <div class="w-full mt-4">
                            <button @click="add({{ json_encode($product) }})" x-show="! has({{ $product->id }})" class="w-full bg-blue-500 rounded py-2 px-4 text-white focus:bg-blue-600 focus:shadow-outline focus:outline-none transition-all duration-200 ease-in-out">Add to Basket</button>

                            <div x-show="has({{ $product->id }})" class="flex w-full items-center justify-center text-center select-none">
                                <button @click="remove({{ json_encode($product) }})" class="w-12 bg-blue-500 rounded py-2 px-4 text-white focus:bg-blue-600 focus:shadow-outline focus:outline-none transition-all duration-200 ease-in-out">-</button>

                                <span class="flex-1 font-medium text-lg text-black" x-text="find({{ $product->id }}).qty || 0"></span>

                                <button @click="add({{ json_encode($product) }})" class="w-12 bg-blue-500 rounded py-2 px-4 text-white focus:bg-blue-600 focus:shadow-outline focus:outline-none transition-all duration-200 ease-in-out">+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach
    </div>
@endsection
