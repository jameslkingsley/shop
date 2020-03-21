<?php

namespace App\Http\Controllers;

use App\Order;
use App\OrderItem;

class OrderAmendmentController extends Controller
{
    public function store(Order $order, OrderItem $orderItem)
    {
        $orderItem->increment('quantity');
    }

    public function destroy(Order $order, OrderItem $orderItem)
    {
        $orderItem->decrement('quantity');
    }
}
