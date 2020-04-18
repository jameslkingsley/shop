<?php

namespace App\Http\Controllers;

use App\Order;
use App\Events\OrdersFulfilled;

class OrderGroupDeliveredController extends Controller
{
    public function store(string $group)
    {
        $timestamp = now();

        Order::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNull('delivered_at')
            ->whereGroup($group)
            ->update(['delivered_at' => $timestamp]);

        event(new OrdersFulfilled(
            Order::whereNotNull('customer_id')
                ->whereNotNull('charged_at')
                ->whereDeliveredAt($timestamp)
                ->whereGroup($group)
                ->get()
        ));
    }
}
