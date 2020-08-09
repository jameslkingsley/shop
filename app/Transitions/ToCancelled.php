<?php

namespace App\Transitions;

use App\Order;
use App\States\Cancelled;

class ToCancelled extends OrderTransition
{
    public function handle(): Order
    {
        $this->order->status = new Cancelled($this->order);

        $this->order->update(['cancelled_at' => now()]);

        return $this->order;
    }
}
