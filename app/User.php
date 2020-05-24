<?php

namespace App;

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
