<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;

class DispatchController extends Controller
{
    public function index(Request $request, string $group)
    {
        $orders = Order::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNull('delivered_at')
            ->where('group', $group)
            ->orderBy('order')
            ->with('items.product')
            ->get();

        return view('dispatch', compact('orders'));
    }
}
