<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Order as OrderModel;

class Orders extends Component
{
    public $pending = [];
    public $fulfilled = [];
    protected $listeners = ['fetch'];

    public const GROUP_COLORS = [
        'indigo', 'red',
        'green', 'orange',
    ];

    public function mount()
    {
        //
    }

    public function fetch()
    {
        $this->pending = OrderModel::whereNotNull('customer_id')
            ->whereNull('charged_at')
            ->whereNull('delivered_at')
            ->orderBy('created_at', 'desc')
            ->get();

        $this->fulfilled = OrderModel::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNotNull('delivered_at')
            ->orderBy('delivered_at', 'desc')
            ->get();
    }

    public function render()
    {
        return view('livewire.orders', [
            'groups' => collect(static::GROUP_COLORS),
        ]);
    }
}
