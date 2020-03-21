<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class BasketController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return session()->all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $product
     * @return void
     */
    public function store(Request $request, int $product)
    {
        $existing = session($key = 'basket.items.' . $product);

        session()->put($key, $existing ? $existing + 1 : 1);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $product
     * @return void
     */
    public function destroy(int $product)
    {
        if ($existing = session($key = 'basket.items.' . $product)) {
            session()->put($key, $existing - 1);

            if ($existing - 1 <= 0) {
                session()->forget($key);
            }

            return;
        }

        session()->forget($key);
    }
}
