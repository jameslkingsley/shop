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
            @include('components.product', ['product' => $product])
        @endforeach
    </div>
@endsection
