<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;
use App\Events\OrderPicking;

class OrderPickingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function update(Request $request, Order $order)
    {
        $order->update($attributes = ['picking_at' => now()]);

        event(new OrderPicking($order));

        return $attributes;
    }
}
