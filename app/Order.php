<?php

namespace App;

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
    ];

    /**
     * The attributes that are guarded.
     *
     * @var array
     */
    protected $guarded = [];

    public function items()
    {
        return $this->hasMany(OrderItem::class);
    }

    public function getTotalAttribute()
    {
        return $this->items->map(fn($item) => $item->quantity * $item->amount)->sum();
    }
}
