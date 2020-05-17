<div class="block w-full mb-8">
    <a href="{{ $parent_url }}" class="text-sm text-gray-500 hover:text-blue-500 transition-all duration-200 ease-in-out">
        {!! $back ?? "&larr; Back to {$parent}" !!}
    </a>

    <h1 class="w-full text-xl sm:text-2xl font-bold">
        {{ $title }}
    </h1>

    @if ($description ?? null)
        <p class="text-gray-600">
            {{ $description }}
        </p>
    @endif
</div>
