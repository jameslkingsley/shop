<div wire:init="fetch" wire:poll.5000ms="fetch" class="flex flex-wrap items-start justify-between w-full py-4 sm:py-8 px-4 sm:px-10">
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

        @livewire('delivery-group', ['group' => null], 'unassigned')

        @foreach ($groups as $group)
            @livewire('delivery-group', compact('group'), key($group))
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
