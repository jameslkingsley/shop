<?php

namespace App;

use Stripe\Customer;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $dates = [
        'created_at',
        'updated_at',
        'charged_at',
        'delivered_at',
    ];

    protected $appends = [
        'total',
        'customer',
    ];

    protected $guarded = [];

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function getTotalAttribute()
    {
        return $this->items->map(fn($item) => $item->quantity * $item->amount)->sum();
    }

    public function getCustomerAttribute()
    {
        if (! $this->customer_id) {
            return null;
        }

        return Customer::retrieve($this->customer_id)->toArray();
    }
}
