@extends('layouts.app')

@section('content')
    <div class="flex items-center w-full mb-8">
        <div class="flex-1">
            <a href="{{ route('home') }}" class="text-sm text-gray-500 hover:text-blue-600 transition-all duration-200 ease-in-out">
                &larr; Continue shopping
            </a>

            <h1 class="w-full text-xl sm:text-2xl font-bold">Your Order History</h1>
        </div>
    </div>

    <div class="flex flex-col">
        <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
            <div class="align-middle inline-block min-w-full shadow-md overflow-hidden sm:rounded-lg">
                <table class="min-w-full">
                    <thead>
                        <tr>
                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Order Placed
                            </th>

                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Delivery Date
                            </th>

                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                No. of Items
                            </th>

                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Basket Total
                            </th>

                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>

                            <th class="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
                        </tr>
                    </thead>

                    <tbody class="bg-white">
                        @forelse ($orders as $order)
                            <tr>
                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div>
                                        <div class="text-sm leading-5 font-medium text-gray-900">
                                            {{ $order->created_at->format('jS F, Y') }}
                                        </div>
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div>
                                        <div class="text-sm leading-5 font-medium text-gray-900">
                                            @if ($order->delivery_date->isToday())
                                                Today, {{ $order->delivery_date->format('jS F, Y') }}
                                            @else
                                                {{ $order->delivery_date->format('jS F, Y') }}
                                            @endif
                                        </div>
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="text-sm leading-5 text-gray-900">
                                        {{ $order->items->count() }} {{ str_plural('item', $order->items->count()) }}
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <div class="text-sm leading-5 text-gray-900">
                                        &pound;{{ number_format($order->total / 100, 2) }}
                                    </div>
                                </td>

                                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                    <span class="text-sm bg-{{ $order->status['style'] }}-100 text-{{ $order->status['style'] }}-500 rounded-full px-3 py-1 font-medium">
                                        {{ $order->status['message'] }}
                                    </span>
                                </td>

                                <td class="select-none px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                    <a href="{{ route('order', $order->id) }}" class="group inline-flex items-center text-blue-600 hover:text-blue-500 font-semibold uppercase text-xs tracking-wide">
                                        <span>View Order</span>
                                        @svg('arrow-right', 'w-3 h-3 ml-2 fill-current transform transition-all group-hover:translate-x-1 duration-200 ease-in-out')
                                    </a>
                                </td>
                            </tr>
                        @empty
                            You haven't placed any orders.
                        @endforelse
                    </tbody>
                </table>
            </div>
        </div>
    </div>
@endsection
