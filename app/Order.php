<?php

namespace App;

use Stripe\Customer;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'shop_orders';

    protected $dates = [
        'created_at',
        'updated_at',
        'charged_at',
        'delivered_at',
    ];

    protected $appends = [
        'total',
        'subTotal',
        'deliveryFee',
    ];

    protected $casts = [
        'metadata' => 'object',
        'collection' => 'boolean',
        'free_delivery' => 'boolean',
    ];

    protected $guarded = [];

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function getSubTotalAttribute()
    {
        return $this->items->map(fn ($item) => $item->quantity * $item->amount)->sum();
    }

    public function getDeliveryFeeAttribute()
    {
        if ($this->collection || $this->free_delivery) {
            return 0;
        }

        if ($this->subtotal >= 30 * 100) {
            return 0;
        }

        if ($this->subtotal >= 20 * 100) {
            return 100;
        }

        return 200;
    }

    public function getTotalAttribute()
    {
        return $this->subTotal + $this->deliveryFee;
    }

    public function getCustomer()
    {
        if (! $this->customer_id) {
            return null;
        }

        return Customer::retrieve($this->customer_id);
    }
}
