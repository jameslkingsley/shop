<div class="flex w-full items-center text-xs 2xl:text-sm mb-1 whitespace-no-wrap overflow-visible">
{{--    <span class="inline-block text-left font-number mr-2 w-10">{{ $item->product->prodID }}</span>--}}

    <span class="inline-block text-left min-w-1/2 mr-2">{{ $item->product->prodTitle }}</span>
    <span class="inline-block text-left w-12">{{ $item->product->prodUnitSize }}</span>

    <div class="flex-1 inline-flex items-center justify-end">
        @if (! $item->order->charged_at)
            <input wire:model.lazy="quantity" placeholder="Quantity" class="font-number text-right border rounded px-1 w-8" />
        @else
            <span class="font-number text-right w-8">{{ $item->quantity }}</span>
        @endif

        <span class="font-number text-right ml-1 mr-2">
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
