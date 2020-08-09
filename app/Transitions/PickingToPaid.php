<?php

namespace App\Transitions;

use App\Order;
use App\States\Paid;

class PickingToPaid extends OrderTransition
{
    public function handle(): Order
    {
        $this->order->status = new Paid($this->order);

        $this->order->update(['charged_at' => now()]);

        return $this->order;
    }
}
