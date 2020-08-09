<div>
    @if (session()->has('message'))
        <span>
            {{ session('message') }}
        </span>
    @endif

    <div class="bg-white p-6 border-b border-gray-100">
        <x:select wire:model="status" class="w-48">
            <x:slot name="label">
                {{ $this->statuses()[$status] ?? 'Status' }}
            </x:slot>

            @foreach ($this->statuses() as $value => $label)
                @if ($this->transitionableStates->contains($value::$name))
                    <x:select-item :value="$value">{{ $label }}</x:select-item>
                @else
                    <x:select-item :value="$value" disabled>{{ $label }}</x:select-item>
                @endif
            @endforeach
        </x:select>
    </div>

    <div class="pt-16">
        <div class="inline-block w-full">
            <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <div class="align-middle inline-block min-w-full overflow-hidden">
                    <table class="min-w-full">
                        <thead>
                            <tr>
                                <th class="px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-600 uppercase tracking-wider">
                                    Product
                                </th>

                                <th align="right" class="px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-600 uppercase tracking-wider text-right">
                                    Quantity
                                </th>

                                <th align="right" class="px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-600 uppercase tracking-wider text-right">
                                    Price
                                </th>

                                <th align="right" class="px-6 py-3 text-left text-xs leading-4 font-semibold text-gray-600 uppercase tracking-wider text-right">
                                    Total
                                </th>

                                {{--<th class="px-6 py-3 border-b border-gray-100 bg-gray-50"></th>--}}
                            </tr>
                        </thead>

                        <tbody class="bg-white">
                            @forelse ($order->items as $item)
                                <tr class="even:bg-background">
                                    <td class="inline-flex items-center space-x-4 px-4 whitespace-no-wrap">
                                        <div class="inline-block w-16 flex items-center justify-center text-gray-500 text-xs select-none">
                                            <img src="{{ $item->product->prodImg }}" alt="No image available" class="w-16 blend-multiply" />
                                        </div>

                                        <div class="inline-block leading-5 text-gray-900">
                                            {{ $item->product->prodTitle }}{{ $item->product->prodUnitSize ? ", {$item->product->prodUnitSize}" : '' }}
                                        </div>
                                    </td>

                                    <td class="px-4 whitespace-no-wrap">
                                        <div class="leading-5 text-gray-900 text-right">
                                            {{ $item->quantity }}
                                        </div>
                                    </td>

                                    <td class="px-4 whitespace-no-wrap">
                                        <div class="leading-5 text-gray-900 text-right">
                                            &pound;{{ number_format($item->amount_float, 2) }}
                                        </div>
                                    </td>

                                    <td class="px-4 whitespace-no-wrap">
                                        <div class="leading-5 text-gray-900 text-right">
                                            &pound;{{ number_format($item->total / 100, 2) }}
                                        </div>
                                    </td>

                                    {{--<td class="select-none px-6 py-4 whitespace-no-wrap text-right border-b border-gray-100 text-sm leading-5 font-medium">--}}
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
</div>
