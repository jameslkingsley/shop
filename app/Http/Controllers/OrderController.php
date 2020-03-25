<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('adminLoggedIn')->only('index', 'show');
    }

    public function index()
    {
        return Order::whereNotNull('customer_id')->with('items')->get()
            ->mapWithKeys(fn($order) => [$order->id => $order]);
    }

    public function show(Order $order)
    {
        return $order->load('items');
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
            'cancel_url' => url('/'),
            'payment_method_types' => ['card'],
            'client_reference_id' => $order->id,
            'metadata' => ['telephone' => $request->telephone],
            'shipping_address_collection' => ['allowed_countries' => ['GB']],
            'success_url' => url('/checkout/complete?session_id={CHECKOUT_SESSION_ID}'),
        ]);

        return response()->json([
            'sessionId' => $session->id,
        ]);
    }
}
