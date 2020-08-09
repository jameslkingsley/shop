<?php

namespace App;

use Stripe\Customer;
use App\States\Paid;
use App\States\Pending;
use App\States\Picking;
use App\States\Completed;
use App\States\Cancelled;
use App\States\OrderState;
use App\Transitions\ToCancelled;
use Spatie\ModelStates\HasStates;
use App\Transitions\PickingToPaid;
use App\Transitions\PaidToCompleted;
use App\Transitions\PendingToPicking;
use App\Transitions\PickingToPending;
use Illuminate\Database\Eloquent\Model;
use App\Transitions\CancelledToPending;

/**
 * @property \App\States\OrderState $status
 */
class Order extends Model
{
    use HasStates;

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

    public static function allPending()
    {
        return static::whereState('status', Pending::class)
            ->get();
    }

    public static function allPicking()
    {
        return static::whereState('status', Picking::class)
            ->get();
    }

    public static function allOutForDelivery()
    {
        return static::whereState('status', Paid::class)
            ->get();
    }

    public static function allCompleted()
    {
        return static::whereState('status', Completed::class)
            ->get();
    }

    public static function allCancelled()
    {
        return static::whereState('status', Cancelled::class)
            ->get();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

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

    protected function registerStates(): void
    {
        $this
            ->addState('status', OrderState::class)
            ->default(Pending::class)
            ->allowTransitions([
                [Pending::class, Picking::class, PendingToPicking::class],
                [Picking::class, Pending::class, PickingToPending::class],
                [Picking::class, Paid::class, PickingToPaid::class],
                [Paid::class, Completed::class, PaidToCompleted::class],
                [Cancelled::class, Pending::class, CancelledToPending::class],
            ])
            ->allowTransition([Pending::class, Picking::class, Paid::class], Cancelled::class, ToCancelled::class);
    }
}
