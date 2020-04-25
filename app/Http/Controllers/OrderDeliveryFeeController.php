<?php

namespace App\Http\Controllers;

use App\Order;

class OrderDeliveryFeeController extends Controller
{
    public function update(Order $order)
    {
        $order->update(['free_delivery' => false]);
    }

    public function destroy(Order $order)
    {
        $order->update(['free_delivery' => true]);
    }
}
