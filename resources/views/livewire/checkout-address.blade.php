<div wire:click="select" class="{{ $active ? 'border-2 border-blue-500' : 'border-2 border-gray-100 text-gray-500' }} group flex w-full items-start cursor-pointer select-none p-4 rounded-md transition-all duration-150 ease-in-out">
    <span class="form-radio mr-2 flex-shrink-0" @if ($active) checked @endif>
        <i></i>
    </span>

    <div class="flex-1 inline-flex flex-col">
        <span class="font-medium text-base leading-none">
            {{ $address->full_name }}
        </span>

        <span class="text-sm leading-normal mt-2">
            {{ $address->line1 }},
            {{ $address->line2 }}
            <br />
            {{ $address->city }},
            {{ $address->postcode }}
            <br />
            {{ $address->telephone }}
        </span>
    </div>
</div>
