<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;
use App\Events\OrderGroupAssigned;

class OrderGroupController extends Controller
{
    const PER_PAGE = 5;

    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(Request $request, string $group, int $page = 1)
    {
        return $this->{$group}($this->getPageOffset($page));
    }

    public function show(Request $request, string $group)
    {
        $query = Order::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNull('delivered_at')
            ->where(fn ($query) => $query->whereNull('collection')->orWhere('collection', false));

        if ($group === 'none') {
            $query->whereNull('group');
        } else {
            $query->where('group', $group);
        }

        return $query->orderBy('order')->with('items.product')->get();
    }

    public function update(Request $request, Order $order)
    {
        $request->validate(['group' => 'required|string']);

        if ($request->group === $order->group) {
            return;
        }

        $previousGroup = $order->group;

        $order->update(['group' => $request->group]);

        event(new OrderGroupAssigned($order, $previousGroup));
    }

    protected function getPageOffset($page)
    {
        return static::PER_PAGE * ($page - 1);
    }

    protected function collection($page)
    {
        return Order::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNotNull('picking_at')
            ->whereNull('delivered_at')
            ->whereCollection(true)
            ->orderBy('created_at', 'desc')
            ->with('items.product')
            ->get();
    }

    protected function fulfilled($page)
    {
        return Order::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNotNull('delivered_at')
            ->orderBy('delivered_at', 'desc')
            ->offset($page)
            ->limit(static::PER_PAGE)
            ->with('items.product')
            ->get();
    }

    protected function picking($page)
    {
        return Order::whereNotNull('customer_id')
            ->whereNull('charged_at')
            ->whereNull('delivered_at')
            ->whereNotNull('picking_at')
            ->orderBy('created_at', 'desc')
            ->with('items.product')
            ->get();
    }

    protected function pending($page)
    {
        return Order::whereNotNull('customer_id')
            ->whereNull('charged_at')
            ->whereNull('delivered_at')
            ->whereNull('picking_at')
            ->orderBy('created_at', 'desc')
            ->offset($page)
            ->limit(static::PER_PAGE)
            ->with('items.product')
            ->get();
    }
}
