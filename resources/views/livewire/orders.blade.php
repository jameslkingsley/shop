<div wire:init="fetch" class="flex flex-wrap items-start justify-between w-full py-4 sm:py-8 px-4 sm:px-10">
    <div class="block w-full lg:w-1/2 xl:w-1/3 mb-16 orders-pending lg:pr-8 xl:pr-16">
        <span class="text-xl block w-full font-bold -mb-2">Pending</span>

        @forelse ($pending as $order)
            @livewire('order', compact('order'), key($order->id))
        @empty
            <span class="text-gray-600 mt-2 block w-full">No orders available.</span>
        @endforelse
    </div>

    <div class="block w-full lg:w-1/2 xl:w-1/3 mb-16 orders-out-for-delivery xl:pr-16">
        <span class="text-xl block w-full font-bold -mb-2">Out for delivery</span>

        @foreach (collect($outForDelivery)->where('group', null)->sortBy('order') as $order)
            @livewire('order', compact('order'), key($order->id))
        @endforeach

        @foreach ($groups as $group)
            @if (collect($outForDelivery)->where('group', $group)->isNotEmpty())
                <div class="relative block w-full mb-16">
                    @forelse (collect($outForDelivery)->where('group', $group)->sortBy('order') as $order)
                        @livewire('order', compact('order'), key($group . '-' . $order->id))
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
        @endforeach
    </div>

    <div class="block w-full lg:w-1/2 xl:w-1/3 orders-fulfilled lg:pr-8 xl:pr-0">
        <span class="text-xl block w-full font-bold -mb-2">Fulfilled</span>

        @forelse ($fulfilled as $order)
            @livewire('order', compact('order'), key($order->id))
        @empty
            <span class="text-gray-600 mt-2 block w-full">No orders available.</span>
        @endforelse
    </div>
</div>
