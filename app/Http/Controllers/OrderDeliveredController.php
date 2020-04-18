<?php

namespace App\Http\Controllers;

use App\Order;
use App\Events\OrderPaid;
use App\Events\OrdersFulfilled;

class OrderDeliveredController extends Controller
{
    public function update(Order $order)
    {
        $order->update($attributes = ['delivered_at' => now()]);

        event(new OrdersFulfilled(collect([$order])));

        return $attributes;
    }

    public function destroy(Order $order)
    {
        $order->update($attributes = ['delivered_at' => null]);

        // This will move the order back to the delivery group
        event(new OrderPaid($order));

        return $attributes;
    }
}
