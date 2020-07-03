<div>
    @if ($order->picking_at)
        <button wire:click="stopPicking" class="btn btn-primary">Stop Picking</button>
    @else
        <button wire:click="startPicking" class="btn btn-primary">Start Picking</button>
    @endif

    <div class="block w-full">
        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div class="align-middle inline-block min-w-full shadow-md overflow-hidden sm:rounded-lg">
                <table class="min-w-full">
                    <thead>
                        <tr>
                            <th class="select-none w-16 py-3 border-b border-gray-200 bg-gray-50"></th>

                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Product
                            </th>

                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Unit Size
                            </th>

                            <th align="right" class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-right">
                                Quantity
                            </th>

                            <th align="right" class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-right">
                                Price
                            </th>

                            <th align="right" class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-right">
                                Total
                            </th>

                            {{--<th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>--}}
                        </tr>
                    </thead>

                    <tbody class="bg-white">
                        @forelse ($order->items as $item)
                            <tr>
                                <td class="select-none pl-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="block w-16 bg-white rounded flex items-center justify-center text-gray-500 text-xs">
                                        <img src="{{ $item->product->prodImg }}" alt="No image available" class="w-16" />
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="leading-5 text-gray-900">
                                        {{ $item->product->prodTitle }}
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="leading-5 text-gray-900">
                                        {{ $item->product->prodUnitSize }}
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="leading-5 text-gray-900 text-right">
                                        {{ $item->quantity }}
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="leading-5 text-gray-900 text-right">
                                        &pound;{{ number_format($item->amount_float, 2) }}
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="leading-5 text-gray-900 text-right">
                                        &pound;{{ number_format($item->total / 100, 2) }}
                                    </div>
                                </td>

                                {{--<td class="select-none px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">--}}
                                {{--    <a href="{{ route('order', $order->id) }}" class="group inline-flex items-center text-blue-600 hover:text-blue-500 font-semibold uppercase text-xs tracking-wide">--}}
                                {{--        <span>View Order</span>--}}
                                {{--        @svg('arrow-right', 'w-3 h-3 ml-2 fill-current transform transition-all group-hover:translate-x-1 duration-200 ease-in-out')--}}
                                {{--    </a>--}}
                                {{--</td>--}}
                            </tr>
                        @empty
                            You haven't placed any orders.
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
