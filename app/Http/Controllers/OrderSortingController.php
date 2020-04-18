<?php

namespace App\Http\Controllers;

use App\Order;

class OrderSortingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function update(Order $order)
    {
        $order->increment('order');
    }

    public function destroy(Order $order)
    {
        if ($order->order !== 0) {
            $order->decrement('order');
        }
    }
}
