<?php

namespace App\Actions;

use App\Order;
use App\Notifications\OrderCancelledNotification;

class CancelOrderAction extends Action
{
    /**
     * Cancel the order.
     */
    public function execute(Order $order): Order
    {
        $order->update(['cancelled_at' => now()]);

        auth()->user()->notify(new OrderCancelledNotification);

        return $order;
    }
}
