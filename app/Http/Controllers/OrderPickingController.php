<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;

class OrderPickingController extends Controller
{
    public function update(Request $request, Order $order)
    {
        $order->update($attributes = ['picking_at' => now()]);

        return $attributes;
    }
}
