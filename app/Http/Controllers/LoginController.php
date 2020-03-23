<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function store(Request $request)
    {
        $request->validate(['secret' => 'required|string']);

        if (Hash::check($request->secret, bcrypt(config('auth.admin_secret')))) {
            return session(['admin_logged_in' => true]);
        }

        throw new Exception('Wrong password given.');
    }
}
