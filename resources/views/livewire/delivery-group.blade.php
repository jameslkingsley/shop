<div wire:init="fetch">
    @if (count($orders))
        <div class="relative block w-full mb-16">
            @forelse ($orders as $order)
                @livewire('order', compact('order'), key($order->id))
            @empty
                <span class="text-gray-600 mt-2 block w-full">No orders available.</span>
            @endforelse

            <div class="{{ "bg-{$group}-200" }} absolute hidden sm:flex flex-col items-center justify-center right-0 top-0 bottom-0 w-1 -mr-4 rounded-full">
                <span wire:click="markAllAsDelivered('{{ $group }}')" class="{{ "bg-{$group}-400 active:bg-{$group}-500 rounded-full p-1 xl:p-2 cursor-pointer select-none transition-all transform hover:scale-110 ease-in-out duration-200" }}">
                    @svg('checkmark', 'size-4 text-white')
                </span>
            </div>
        </div>
    @endif
</div>
