@extends('layouts.app')

@section('content')
    @include('layouts.header', [
        'parent' => $group->pgTitle,
        'title' => $category->pcatTitle,
        'description' => $category->pcatDescription,
        'parent_url' => url('/group/' . $group->getKey()),
    ])

    <div x-data="{{ json_encode(compact('products')) }}" x-subscribe class="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <template x-for="item in products">
            @include('components.product')
        </template>
    </div>
@endsection
