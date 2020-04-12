<div wire:poll.5000ms class="flex flex-wrap items-start justify-between w-full py-4 sm:py-8 sm:px-10">
    <div class="block w-full lg:w-1/2 xl:w-1/3 mb-16 orders-pending lg:pr-8 xl:pr-16">
        <span class="text-xl block w-full font-bold -mb-2 px-4 sm:px-0">New Orders</span>

        @forelse ($pending as $order)
            @livewire('order', compact('order'), key($order->id))
        @empty
            <span class="text-gray-600 mt-2 block w-full px-4 sm:px-0">No orders available.</span>
        @endforelse

        {{ $pending->links() }}
    </div>

    <div class="block w-full lg:w-1/2 xl:w-1/3 mb-16 orders-pending lg:pr-8 xl:pr-16">
        <span class="text-xl block w-full font-bold -mb-2 px-4 sm:px-0">Being Picked</span>

        @forelse ($picking as $order)
            @livewire('order', compact('order'), key($order->id))
        @empty
            <span class="text-gray-600 mt-2 block w-full px-4 sm:px-0">No orders being picked right now.</span>
        @endforelse
    </div>

    <div class="block w-full lg:w-1/2 xl:w-1/3 mb-16 orders-out-for-delivery xl:pr-16">
        <div class="flex items-center text-xl w-full font-bold -mb-2 px-4 sm:px-0">
            <span class="flex-shrink-0">Out for delivery</span>

            <div class="inline-flex justify-end items-center flex-1 ml-8">
                @foreach ($groups as $group)
                    <a href="{{ url('dispatch/' . $group) }}" target="_blank" class="{{ "bg-{$group}-400 active:bg-{$group}-500 rounded-full p-1 xl:p-2 cursor-pointer select-none transition-all transform hover:scale-110 ease-in-out duration-200 ml-1" }}">
                        @svg('printer', 'size-4 text-white')
                    </a>
                @endforeach
            </div>
        </div>

        @livewire('delivery-group', ['group' => null], 'unassigned')

        @foreach ($groups as $group)
            @livewire('delivery-group', compact('group'), key($group))
        @endforeach
    </div>

    <div class="block w-full lg:w-1/2 xl:w-1/3 orders-fulfilled lg:pr-8 xl:pr-0">
        <span class="text-xl block w-full font-bold -mb-2 px-4 sm:px-0">Fulfilled</span>

        @forelse ($fulfilled as $order)
            @livewire('order', compact('order'), key($order->id))
        @empty
            <span class="text-gray-600 mt-2 block w-full px-4 sm:px-0">No orders available.</span>
        @endforelse
    </div>
</div>
