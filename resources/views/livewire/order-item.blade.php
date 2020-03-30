<div class="flex w-full items-center text-xs 2xl:text-sm mb-1">
    <span class="text-left truncate font-number mr-4 w-12">{{ $item->product->id }}</span>

    <span class="text-left truncate flex-1">{{ $item->product->title }}</span>
    <span class="text-left truncate w-16">{{ $item->product->unit_size }}</span>

    <div class="inline-flex items-center justify-end">
        @if (! $item->order->charged_at)
            <span wire:click="remove" class="underline text-xs cursor-pointer select-none mr-6">
                Remove
            </span>
        @endif

        @if (! $item->order->charged_at)
            <input wire:model.lazy="quantity" placeholder="Quantity" class="font-number text-right border rounded px-1 w-8" />
        @else
            <span class="font-number text-right w-8">{{ $item->quantity }}</span>
        @endif

        <span class="font-number text-right ml-1 mr-4">
            &times;
        </span>

        <span class="font-number text-right mr-1">
            &pound;
        </span>

        @if (! $item->order->charged_at)
            <input wire:model.lazy="amount" placeholder="Amount" class="font-number text-right border rounded px-1 w-12" />
        @else
            <span class="font-number text-right w-12">{{ $amount }}</span>
        @endif
    </div>
</div>
