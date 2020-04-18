<?php

namespace App\Http\Controllers;

use App\Order;
use Stripe\PaymentIntent;
use App\Events\OrderPaid;

class OrderPaymentController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store(Order $order)
    {
        PaymentIntent::create([
            'confirm' => true,
            'currency' => 'gbp',
            'off_session' => true,
            'amount' => $order->total,
            'customer' => $order->customer_id,
            'payment_method_types' => ['card'],
            'payment_method' => $order->payment_method_id,
        ]);

        $order->update(['charged_at' => now()]);

        event(new OrderPaid($order));
    }

    public function update(Order $order)
    {
        $order->update(['charged_at' => now()]);

        event(new OrderPaid($order));
    }
}
