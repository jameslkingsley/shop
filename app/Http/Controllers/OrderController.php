<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;

class OrderController extends Controller
{
    public function index()
    {
        return Order::whereNotNull('customer_id')->with('items')->get();
    }

    public function store(Request $request)
    {
        $request->validate([
            'telephone' => 'required',
            'basket' => 'required',
        ]);

        $items = [];

        foreach ($request->basket as $id => $product) {
            $items[] = [
                'product_id' => $id,
                'amount' => $product['price'],
                'quantity' => $product['qty'],
            ];
        }

        $order = Order::create();
        $order->items()->createMany($items);

        $session = Session::create([
            'mode' => 'setup',
            'payment_method_types' => ['card'],
            'client_reference_id' => $order->id,
            'cancel_url' => 'http://shop.test/checkout',
            'metadata' => ['telephone' => $request->telephone],
            'shipping_address_collection' => ['allowed_countries' => ['GB']],
            'success_url' => 'http://shop.test/checkout/complete?session_id={CHECKOUT_SESSION_ID}',
        ]);

        return response()->json([
            'sessionId' => $session->id,
        ]);
    }
}
