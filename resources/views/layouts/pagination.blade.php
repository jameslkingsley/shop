@if ($paginator->hasPages())
    <div class="flex w-full items-center">
        {{-- Previous Page Link --}}
        @if ($paginator->onFirstPage())
            <span class="disabled" aria-disabled="true" aria-label="@lang('pagination.previous')">
                <x:icon-cheveron-left class="size-6 fill-current text-blue-200" />
            </span>
        @else
            <span wire:click="previousPage" class="cursor-pointer select-none">
                <x:icon-cheveron-left class="size-6 fill-current text-blue-500" />
            </span>
        @endif

        <div class="flex-1 inline-flex items-center justify-center">
            {{-- Pagination Elements --}}
            @foreach ($elements as $element)
                {{-- "Three Dots" Separator --}}
                @if (is_string($element))
                    <span class="disabled" aria-disabled="true">
                        {{ $element }}
                    </span>
                @endif

                {{-- Array Of Links --}}
                @if (is_array($element))
                    @foreach ($element as $page => $url)
                        @if ($page == $paginator->currentPage())
                            <span class="px-2 mx-px cursor-default rounded-full text-blue-600 font-bold bg-blue-200" aria-current="page">
                                {{ $page }}
                            </span>
                        @else
                            <span wire:click="gotoPage({{ $page }})" class="px-2 mx-px rounded-full text-blue-500 font-bold cursor-pointer select-none hover:bg-blue-500 hover:text-white">
                                {{ $page }}
                            </span>
                        @endif
                    @endforeach
                @endif
            @endforeach
        </div>

        {{-- Next Page Link --}}
        @if ($paginator->hasMorePages())
            <span wire:click="nextPage" class="cursor-pointer select-none">
                <x:icon-cheveron-right class="size-6 fill-current text-blue-500" />
            </span>
        @else
            <span class="disabled" aria-disabled="true" aria-label="@lang('pagination.next')">
                <x:icon-cheveron-right class="size-6 fill-current text-blue-200" />
            </span>
        @endif
    </div>
@endif
