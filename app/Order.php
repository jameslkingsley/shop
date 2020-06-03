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
        'delivery_date',
    ];

    protected $appends = [
        'total',
        'status',
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

    public function getStatusAttribute()
    {
        if ($this->delivered_at) {
            return [
                'message' => 'Delivered',
                'style' => 'green',
            ];
        }

        if ($this->charged_at) {
            return [
                'message' => 'Out for Delivery',
                'style' => 'blue',
            ];
        }

        if ($this->picking_at) {
            return [
                'message' => 'Being Picked',
                'style' => 'blue',
            ];
        }

        return [
            'message' => 'Pending',
            'style' => 'gray',
        ];
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
