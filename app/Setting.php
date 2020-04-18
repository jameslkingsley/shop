<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    protected $connection = 'sle';
    protected $table = 'shop_settings';
    public $timestamps = false;
    protected $guarded = [];

    public static function isShutdown()
    {
        return ! (bool) static::where('key', 'enabled')->first()->value ?? false;
    }
}
