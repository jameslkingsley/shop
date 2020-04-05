<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Order as OrderModel;

class DeliveryGroup extends Component
{
    public $group;
    public $orders = [];
    protected $listeners = ['fetch'];

    public function mount($group)
    {
        $this->group = $group;
    }

    public function markAllAsDelivered()
    {
        OrderModel::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNull('delivered_at')
            ->whereGroup($this->group)
            ->update(['delivered_at' => now()]);

        $this->fetch();
    }

    public function fetch()
    {
        $this->orders = OrderModel::whereNotNull('customer_id')
            ->whereNotNull('charged_at')
            ->whereNull('delivered_at')
            ->where('group', $this->group)
            ->orderBy('order')
            ->get();
    }

    public function render()
    {
        return view('livewire.delivery-group');
    }
}
