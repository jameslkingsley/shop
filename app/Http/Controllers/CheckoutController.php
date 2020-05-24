<?php

namespace App\Http\Controllers;

class CheckoutController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $cards = auth()->user()->cards;
        $addresses = auth()->user()->addresses;
        $primaryCard = $cards->firstWhere('primary', true);
        $primaryAddress = $addresses->firstWhere('primary', true);

        return view('checkout', [
            'cards' => $cards,
            'addresses' => $addresses,
            'primaryCard' => $primaryCard,
            'primaryAddress' => $primaryAddress,
            'basketDefaults' => [
                'cardId' => $primaryCard->id ?? null,
                'addressId' => $primaryAddress->id ?? null,
            ],
        ]);
    }
}
