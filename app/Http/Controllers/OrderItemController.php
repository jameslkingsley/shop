<?php

namespace App\Http\Controllers;

use App\Order;
use App\Product;
use App\OrderItem;
use Illuminate\Http\Request;

class OrderItemController extends Controller
{
    public function store(Request $request, Order $order)
    {
        $request->validate(['productId' => 'required|numeric']);

        if ($product = Product::find($request->productId)) {
            $order->items()->create([
                'quantity' => 1,
                'product_id' => $product->prodID,
                'amount' => $product->prodOurPrice * 100,
            ]);
        }
    }

    public function destroy(OrderItem $orderItem)
    {
        $orderItem->delete();
    }
}
