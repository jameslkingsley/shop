<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;
use Stripe\Checkout\Session;

class OrderCancelController extends Controller
{
    public function store(Request $request)
    {
        if (! $request->query('session_id')) {
            return redirect('/');
        }

        if ($session = Session::retrieve($request->query('session_id'))) {
            if ($order = Order::find($session->client_reference_id)) {
                if (! $order->customer_id) {
                    $order->delete();
                }
            }
        }

        return redirect('/');
    }
}
