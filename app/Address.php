<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $guarded = [];

    public static function boot()
    {
        parent::boot();

        self::creating(function (Address $address) {
            $address->county = 'Cornwall';
            $address->country = 'United Kingdom';
            $address->primary = auth()->user()->addresses()->count() === 0;
        });
    }
}
