<div class="flex">
    <div class="flex flex-col w-84 py-4 bg-white h-screen border-r border-gray-100">
        <span class="block w-full px-6 mb-4 font-semibold text-2xl">
            {{ $title }}
        </span>

        <div class="flex space-x-4 w-full px-6 mb-4">
            <input placeholder="Search" class="form-input" />
        </div>

        <div class="flex flex-col divide-y divide-gray-100 w-full flex-1 overflow-y-auto">
            @forelse ($orders as $order)
                <a href="{{ route($route, $order->id) }}" class="{{ $order->id === $orderId ? 'bg-gray-100' : '' }} flex flex-col w-full px-6 py-3 hover:bg-gray-100 cursor-pointer select-none text-sm">
                    <div class="flex items-center font-medium">
                        <span class="flex-1">{{ $order->user->name }}</span>
                        <span class="text-right font-number">{{ $order->total_formatted }}</span>
                    </div>

                    <div class="flex items-center text-xs text-gray-500">
                        <span class="flex-1">
                            {{ $order->collection ? 'Collection' : 'Home Delivery' }}
                            &middot; {{ $order->created_at->diffForHumans() }}
                        </span>

                        <span class="text-right font-number">
                            {{ $order->items->count() }}
                            {{ str_plural('item', $order->items->count()) }}
                        </span>
                    </div>
                </a>
            @empty
                <span class="px-6">Nothing to see here.</span>
            @endforelse
        </div>
    </div>

    <div class="flex-1 p-12">
        @livewire('admin.order', ['orderId' => $orderId])
    </div>
</div>
