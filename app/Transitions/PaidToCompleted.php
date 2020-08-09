<?php

namespace App\Transitions;

use App\Order;
use App\States\Completed;

class PaidToCompleted extends OrderTransition
{
    public function handle(): Order
    {
        $this->order->status = new Completed($this->order);

        $this->order->update(['delivered_at' => now()]);

        return $this->order;
    }
}
