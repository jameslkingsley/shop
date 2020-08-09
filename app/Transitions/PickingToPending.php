<?php

namespace App\Transitions;

use App\Order;
use App\States\Pending;

class PickingToPending extends OrderTransition
{
    public function handle(): Order
    {
        $this->order->status = new Pending($this->order);

        $this->order->update(['picking_at' => null]);

        return $this->order;
    }
}
