<?php

namespace App\Http\Controllers;

use App\OrderItem;
use Illuminate\Http\Request;

class OrderItemQuantityController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function update(Request $request, OrderItem $orderItem)
    {
        $attributes = $request->validate([
            'quantity' => 'required|numeric|min:0',
        ]);

        $orderItem->update($attributes);
    }
}
