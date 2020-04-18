<?php

namespace App\Http\Controllers;

use App\Setting;

class ShutdownController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store()
    {
        Setting::updateOrCreate(['key' => 'enabled'], ['value' => 0]);
    }

    public function destroy()
    {
        Setting::updateOrCreate(['key' => 'enabled'], ['value' => 1]);
    }
}
