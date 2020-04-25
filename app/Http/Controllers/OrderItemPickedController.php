<?php

namespace App\Http\Controllers;

use App\OrderItem;

class OrderItemPickedController extends Controller
{
    public function update(OrderItem $orderItem)
    {
        $orderItem->update(['picked_at' => now()]);
    }

    public function destroy(OrderItem $orderItem)
    {
        $orderItem->update(['picked_at' => null]);
    }
}
