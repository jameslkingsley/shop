<?php

namespace App\Events;

use App\Order;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class OrderGroupAssigned implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public Order $order;
    public ?string $previousGroup;

    /**
     * Create a new event instance.
     *
     * @param \App\Order $order
     * @param string|null $previousGroup
     */
    public function __construct(Order $order, ?string $previousGroup)
    {
        $this->order = $order->load('items.product');
        $this->previousGroup = $previousGroup;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('orders');
    }
}
