<?php

namespace App\Http\Controllers;

use App\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    public function store(Request $request)
    {
        $request->validate(['password' => 'required|string']);

        $user = User::first();

        if (Hash::check($request->password, $user->password)) {
            auth()->login($user, true);

            return redirect('/orders');
        }

        throw new Exception('Wrong password given.');
    }

    public function destroy()
    {
        auth()->logout();

        session()->invalidate();

        return redirect('/');
    }
}
