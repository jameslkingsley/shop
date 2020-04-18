<?php

namespace App\Http\Controllers;

use App\Order;

class OrderBagController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function update(Order $order)
    {
        $order->increment('bags');
    }

    public function destroy(Order $order)
    {
        if ($order->bags !== 0) {
            $order->decrement('bags');
        }
    }
}
