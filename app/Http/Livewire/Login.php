<?php

namespace App\Http\Livewire;

use App\User;
use Livewire\Component;
use Illuminate\Support\Facades\Hash;

class Login extends Component
{
    public function login($password)
    {
        $user = User::first();

        if (Hash::check($password, $user->password)) {
            auth()->login($user, true);

            session(['admin_logged_in' => true]);

            return redirect('/orders');
        }
    }

    public function render()
    {
        return view('livewire.login');
    }
}
