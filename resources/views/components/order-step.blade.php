<div class="px-6 py-5">
    <div class="flex w-full items-center space-x-4">
        <span class="{{ ($active ?? false) ? 'bg-blue-400 text-white' : (($complete ?? false) ? 'bg-green-400 text-white' : 'bg-gray-100 text-gray-400') }} rounded-full inline-flex items-center justify-center w-10 h-10 text-lg font-bold flex-shrink-0">
            @if ($complete ?? false)
                <x:icon-checkmark class="w-4 h-4 fill-current" />
            @elseif ($cancelled ?? false)
                <x:icon-close class="w-4 h-4 fill-current" />
            @else
                {{ $number }}
            @endif
        </span>

        <div class="flex-1 inline-flex flex-col space-y-1">
            <span class="{{ ($active ?? false) ? 'text-blue-500' : (($complete ?? false) ? 'text-green-500' : 'text-gray-400') }} text-lg font-semibold leading-none">
                {{ $label }}
            </span>

            @if ($timestamp ?? false)
                <span title="{{ $timestamp }}" class="text-sm text-gray-500 leading-none">
                    {{ optional($timestamp)->diffForHumans() }}
                </span>
            @endif
        </div>
    </div>
</div>
