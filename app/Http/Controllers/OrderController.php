<?php

namespace App\Http\Controllers;

use App\Order;
use Stripe\Customer;
use Stripe\PaymentMethod;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;
use Stripe\Exception\InvalidRequestException;
use Illuminate\Validation\ValidationException;

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
            'basket' => 'required',
            'comment' => 'nullable|string',
            'customer_id' => 'nullable|string',
            'payment_method_id' => 'nullable|string',
            'telephone' => auth()->check() ? 'nullable|string' : 'required',
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

        if ($request->customer_id && $request->payment_method_id) {
            $metadata = [];

            try {
                $customer = Customer::retrieve($request->customer_id);

                $metadata['name'] = $customer->name;
                $metadata['email'] = $customer->email;
                $metadata['shipping'] = $customer->shipping->toArray();
            } catch (InvalidRequestException $exception) {
                throw ValidationException::withMessages([
                    'customer_id' => $exception->getMessage(),
                ]);
            }

            try {
                PaymentMethod::retrieve($request->payment_method_id);
            } catch (InvalidRequestException $exception) {
                throw ValidationException::withMessages([
                    'payment_method_id' => $exception->getMessage(),
                ]);
            }

            $order->update([
                'metadata' => $metadata,
                'customer_id' => $request->customer_id,
                'payment_method_id' => $request->payment_method_id
            ]);

            return response('Order created.', 204);
        }

        $session = Session::create([
            'mode' => 'setup',
            'cancel_url' => url('/'),
            'payment_method_types' => ['card'],
            'client_reference_id' => $order->id,
            'shipping_address_collection' => ['allowed_countries' => ['GB']],
            'success_url' => url('/checkout/complete?session_id={CHECKOUT_SESSION_ID}'),
            'metadata' => ['telephone' => $request->telephone, 'comment' => $request->comment],
        ]);

        return response()->json([
            'sessionId' => $session->id,
        ]);
    }
}
