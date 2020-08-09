<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $guarded = [];

    public static function isShutdown()
    {
        return false;

        return (bool) static::where('key', 'online_shop_disabled')->first()->value ?? false;
    }
}
