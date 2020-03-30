<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Order as OrderModel;

class Orders extends Component
{
    public $pending = [];
    public $fulfilled = [];
    public $outForDelivery = [];
    protected $listeners = ['fetch'];

    public const GROUP_COLORS = [
        'indigo', 'red',
        'green', 'orange',
    ];

    public function mount()
    {
        //
    }

    public function markAllAsDelivered($group)
    {
        OrderModel::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNull('delivered_at')
            ->whereGroup($group)
            ->update(['delivered_at' => now()]);

        $this->fetch();
    }

    public function print($group)
    {
        // OrderModel::whereNotNull('customer_id')
        //     ->whereNotNull('charged_at')
        //     ->whereNull('delivered_at')
        //     ->whereGroup($group)
        //     ->update(['delivered_at' => now()]);

        $this->fetch();
    }

    public function fetch()
    {
        $this->pending = OrderModel::whereNotNull('customer_id')
            ->whereNull('charged_at')
            ->whereNull('delivered_at')
            ->orderBy('created_at', 'desc')
            ->with('items')->get();

        $this->outForDelivery = OrderModel::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNull('delivered_at')
            ->orderBy('order')
            ->with('items')->get();

        $this->fulfilled = OrderModel::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNotNull('delivered_at')
            ->orderBy('delivered_at', 'desc')
            ->with('items')->get();
    }

    public function render()
    {
        return view('livewire.orders', [
            'groups' => collect(static::GROUP_COLORS),
        ]);
    }
}
