<?php

namespace App\Http\Controllers;

use App\OrderItem;
use Illuminate\Http\Request;

class OrderItemAmountController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function update(Request $request, OrderItem $orderItem)
    {
        $attributes = $request->validate([
            'amount' => 'required|numeric',
        ]);

        $orderItem->update($attributes);
    }
}
