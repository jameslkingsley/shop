<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;

class OrderGroupController extends Controller
{
    public function index(Request $request, string $group, int $page = 1)
    {
        return $this->{$group}($page);
    }

    protected function collection($page)
    {
        return Order::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNotNull('picking_at')
            ->whereNull('delivered_at')
            ->whereCollection(true)
            ->orderBy('created_at', 'desc')
            ->get();
    }

    protected function fulfilled($page)
    {
        return Order::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNotNull('delivered_at')
            ->orderBy('delivered_at', 'desc')
            ->offset($page)
            ->limit(5)
            ->get();
    }

    protected function picking($page)
    {
        return Order::whereNotNull('customer_id')
            ->whereNull('charged_at')
            ->whereNull('delivered_at')
            ->whereNotNull('picking_at')
            ->orderBy('created_at', 'desc')
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
            ->limit(5)
            ->get();
    }
}
