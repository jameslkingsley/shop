<?php

namespace App\Listeners;

use App\Order;
use Illuminate\Support\Facades\Validator;

class OrderPlacedListener
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param object $event
     * @return void
     */
    public function handle($event)
    {
        $order = Order::findOrFail($event->orderId);

        $email = data_get($order->metadata, 'email');

        $validator = Validator::make(compact('email'), [
            'email' => 'required|email',
        ]);

        if (! $validator->fails()) {
            // Send the email...
        }
    }
}
