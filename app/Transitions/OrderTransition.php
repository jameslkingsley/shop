<?php

namespace App\Transitions;

use App\Order;
use Spatie\ModelStates\Transition;

abstract class OrderTransition extends Transition
{
    protected Order $order;

    public function __construct(Order $order)
    {
        $this->order = $order;
    }
}
