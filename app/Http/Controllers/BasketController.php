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
        return view('basket');
    }
}
