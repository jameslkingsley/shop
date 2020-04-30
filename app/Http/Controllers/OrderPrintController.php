<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\Request;

class OrderPrintController extends Controller
{
    public function show(Request $request, Order $order)
    {
        return view('order-printable', compact('order'));
    }
}
