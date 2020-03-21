<?php

namespace App\Http\Controllers;

use App\Order;

class OrderDeliveryController extends Controller
{
    public function store(Order $order) {
        $order->update(['delivered_at' => now()]);
    }
}
