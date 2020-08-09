<?php

namespace App\Transitions;

use App\Order;
use App\States\Picking;

class PendingToPicking extends OrderTransition
{
    public function handle(): Order
    {
        $this->order->status = new Picking($this->order);

        $this->order->update(['picking_at' => now()]);

        return $this->order;
    }
}
