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
        'picking_at',
        'delivered_at',
        'delivery_date',
        'cancelled_at',
    ];

    protected $appends = [
        'total',
        'status',
        'subTotal',
        'deliveryFee',
        'total_formatted',
    ];

    protected $casts = [
        'metadata' => 'object',
        'collection' => 'boolean',
        'free_delivery' => 'boolean',
    ];

    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function getStatusAttribute()
    {
        if ($this->cancelled_at) {
            return [
                'message' => 'Cancelled',
                'color' => 'gray',
            ];
        }

        if ($this->delivered_at) {
            return [
                'message' => 'Delivered',
                'color' => 'green',
            ];
        }

        if ($this->charged_at) {
            return [
                'message' => 'Out for Delivery',
                'color' => 'blue',
            ];
        }

        if ($this->picking_at) {
            return [
                'message' => 'Being Picked',
                'color' => 'blue',
            ];
        }

        return [
            'message' => 'Order Placed',
            'color' => 'blue',
        ];
    }

    public function getSubTotalAttribute()
    {
        return $this->items->map(fn ($item) => $item->quantity * $item->amount)->sum();
    }

    public function getDeliveryFeeAttribute()
    {
        return 0;
    }

    public function getTotalFormattedAttribute()
    {
        return '£' . number_format($this->total / 100, 2);
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
