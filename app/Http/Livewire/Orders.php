<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Order as OrderModel;
use Livewire\WithPagination;

class Orders extends Component
{
    use WithPagination;

    protected $listeners = [
        'fetch' => '$refresh',
    ];

    public int $perPage = 5;

    public const GROUP_COLORS = [
        'indigo', 'red',
        'green', 'orange',
    ];

    public function markAllAsDelivered(string $group)
    {
        OrderModel::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNull('delivered_at')
            ->whereGroup($group)
            ->update(['delivered_at' => now()]);

        $this->emit('fetch');
    }

    public function paginationView()
    {
        return 'layouts.pagination';
    }

    public function pendingOrders()
    {
        return OrderModel::whereNotNull('customer_id')
            ->whereNull('charged_at')
            ->whereNull('delivered_at')
            ->whereNull('picking_at')
            ->orderBy('created_at', 'desc')
            ->paginate($this->perPage);
    }

    public function pickingOrders()
    {
        return OrderModel::whereNotNull('customer_id')
            ->whereNull('charged_at')
            ->whereNull('delivered_at')
            ->whereNotNull('picking_at')
            ->orderBy('created_at', 'desc')
            ->get();
    }

    public function fulfilledOrders()
    {
        return OrderModel::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNotNull('delivered_at')
            ->orderBy('delivered_at', 'desc')
            ->paginate($this->perPage);
    }

    public function render()
    {
        return view('livewire.orders', [
            'groups' => collect(static::GROUP_COLORS),
            'pending' => $this->pendingOrders(),
            'picking' => $this->pickingOrders(),
            'fulfilled' => $this->fulfilledOrders(),
        ]);
    }
}
