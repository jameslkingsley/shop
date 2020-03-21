<?php

namespace App\Http\Controllers;

use App\Order;
use Stripe\PaymentIntent;

class OrderPaymentController extends Controller
{
    public function store(Order $order)
    {
        PaymentIntent::create([
            'amount' => $order->total,
            'currency' => 'gbp',
            'payment_method_types' => ['card'],
            'customer' => $order->customer_id,
            'payment_method' => $order->payment_method_id,
            'off_session' => true,
            'confirm' => true,
        ]);

        $order->update(['charged_at' => now()]);
    }
}
