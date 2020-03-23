<?php

namespace App\Http\Controllers;

use App\Order;
use App\OrderItem;

class OrderAmendmentController extends Controller
{
    public function __construct()
    {
        $this->middleware('adminLoggedIn')->only('destroy');
    }

    public function destroy(Order $order, OrderItem $orderItem)
    {
        $orderItem->decrement('quantity');

        if ($orderItem->quantity <= 0) {
            $orderItem->delete();
        }
    }
}
