<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    protected $connection= 'sle';
    protected $table = 'shop_order_items';

    protected $guarded = [];

    protected $appends = [
        'total',
        'product',
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
}
