<?php

namespace App\Http\Controllers;

use App\Order;
use App\Setting;
use Stripe\Customer;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;
use Stripe\Exception\InvalidRequestException;
use Illuminate\Validation\ValidationException;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth')->only('index', 'show');
    }

    public function index()
    {
        return view('orders', [
            'orders' => auth()->user()->orders()->with('items.product')->get(),
        ]);
    }

    public function store(Request $request)
    {
        if (Setting::isShutdown()) {
            return abort(403, 'Online ordering is currently disabled.');
        }

        $request->validate([
            'basket' => 'required',
            'comment' => 'nullable|string',
            'customer_id' => 'nullable|string',
            'collection' => 'nullable|boolean',
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

        $order = Order::create([
            'comment' => $request->comment,
            'collection' => $request->collection,
        ]);

        $order->items()->createMany($items);

        if ($request->customer_id && auth()->check()) {
            try {
                $customer = Customer::retrieve($request->customer_id);

                $order->update([
                    'customer_id' => $request->customer_id,
                    'metadata' => [
                        'name' => $customer->name,
                        'email' => $customer->email,
                        'shipping' => $customer->shipping->toArray(),
                    ],
                ]);

                return response('Order created.', 204);
            } catch (InvalidRequestException $exception) {
                throw ValidationException::withMessages([
                    'customer_id' => $exception->getMessage(),
                ]);
            }
        }

        $session = Session::create([
            'mode' => 'setup',
            'payment_method_types' => ['card'],
            'client_reference_id' => $order->id,
            'metadata' => ['telephone' => $request->telephone],
            'shipping_address_collection' => ['allowed_countries' => ['GB']],
            'cancel_url' => url('/checkout/cancel?session_id={CHECKOUT_SESSION_ID}'),
            'success_url' => url('/checkout/complete?session_id={CHECKOUT_SESSION_ID}'),
        ]);

        return response()->json([
            'sessionId' => $session->id,
        ]);
    }
}
