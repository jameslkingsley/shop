<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $guarded = [];

    protected $dates = [
        'picked_at',
        'created_at',
        'updated_at',
    ];

    protected $appends = [
        'total',
        'amount_float',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id');
    }

    public function getTotalAttribute()
    {
        return $this->amount * $this->quantity;
    }

    public function getAmountFloatAttribute()
    {
        return $this->amount / 100;
    }
}
