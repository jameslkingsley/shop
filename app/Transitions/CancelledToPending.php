<?php

namespace App\Transitions;

use App\Order;
use App\States\Pending;

class CancelledToPending extends OrderTransition
{
    public function handle(): Order
    {
        $this->order->status = new Pending($this->order);

        $this->order->update([
            'picking_at' => null,
            'charged_at' => null,
            'delivered_at' => null,
        ]);

        return $this->order;
    }
}
