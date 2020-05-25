<?php

namespace App\Http\Controllers;

class BasketController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index()
    {
        $cards = auth()->user()->cards;
        $addresses = auth()->user()->addresses;

        return view('basket', [
            'cards' => $cards,
            'addresses' => $addresses,
            'basketDefaults' => [
                'card' => $cards->firstWhere('primary', true) ?? null,
                'address' => $addresses->firstWhere('primary', true) ?? null,
            ],
        ]);
    }
}
