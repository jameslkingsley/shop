<?php

namespace App;

use Stripe;
use Illuminate\Support\Arr;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    protected $guarded = [];
    protected $hidden = ['password', 'remember_token'];
    protected $casts = ['email_verified_at' => 'datetime'];
    protected $appends = ['first_name'];

    /**
     * Get the user's Stripe customer ID,
     * or create a customer if one doesn't exist.
     *
     * @return string
     */
    public function stripeId()
    {
        if (! $this->stripe_id) {
            $customer = Stripe\Customer::create([
                'name' => $this->name, 'email' => $this->email,
            ]);

            $this->update(['stripe_id' => $customer->id]);
        }

        return $this->stripe_id;
    }

    public function orders()
    {
        return $this->hasMany(Order::class);
    }

    public function cards()
    {
        return $this->hasMany(Card::class);
    }

    public function addresses()
    {
        return $this->hasMany(Address::class);
    }

    public function primaryCard()
    {
        return auth()->user()->cards()->firstWhere('primary', true);
    }

    public function primaryAddress()
    {
        return auth()->user()->addresses()->firstWhere('primary', true);
    }

    public function getFirstNameAttribute()
    {
        return Arr::first(explode(' ', $this->name));
    }
}
