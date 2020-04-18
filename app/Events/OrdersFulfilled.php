<?php

namespace App\Events;

use Illuminate\Support\Collection;
use Illuminate\Broadcasting\Channel;
use Illuminate\Queue\SerializesModels;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class OrdersFulfilled implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public array $orders;

    /**
     * Create a new event instance.
     *
     * @param \Illuminate\Support\Collection $orders
     */
    public function __construct(Collection $orders)
    {
        $this->orders = $orders->map(fn ($order) => $order->load('items.product'))->all();
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
