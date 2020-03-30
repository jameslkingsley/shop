<?php

namespace App\Http\Controllers;

use App\Order;
use Stripe\Customer;
use Stripe\SetupIntent;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;

class OrderCompletionController extends Controller
{
    public function store(Request $request)
    {
        if (! $request->query('session_id')) {
            return redirect('/');
        }

        $session = Session::retrieve($request->query('session_id'));

        $setupIntent = SetupIntent::retrieve([
            'id' => $session->setup_intent,
            'expand' => ['payment_method'],
        ]);

        $setupIntent->payment_method->attach([
            'customer' => $customer = Customer::create($metadata = [
                'name' => $session->shipping->name,
                'email' => $setupIntent->payment_method->billing_details->email,
                'shipping' => array_merge($session->shipping->toArray(), [
                    'phone' => $session->metadata->telephone,
                ]),
            ]),
        ]);

        $order = Order::findOrFail($session->client_reference_id);

        $order->update([
            'metadata' => $metadata,
            'customer_id' => $customer->id,
            'payment_method_id' => $setupIntent->payment_method->id,
        ]);

        return redirect('/checkout/completed/?amount=' . $order->total);
    }
}
