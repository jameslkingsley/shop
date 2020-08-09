<?php

namespace App\Http\Livewire\Admin;

use App\Order;
use Livewire\Component;

class Category extends Component
{
    protected static array $titles = [
        'admin.pending' => 'New Orders',
        'admin.picking' => 'Being Picked',
        'admin.out' => 'Out for Delivery',
        'admin.delivered' => 'Delivered',
        'admin.cancelled' => 'Cancelled',
    ];

    public $route;
    public $title;
    public $orders;
    public ?int $orderId;

    public function mount(?int $order = null)
    {
        $this->route = request()->route()->getName();
        $this->title = static::$titles[$this->route] ?? '';
        $this->orders = $this->orders()[$this->route] ?? [];
        $this->orderId = $order;
    }

    public function orders()
    {
        return [
            'admin.pending' => Order::allPending(),
            'admin.picking' => Order::allPicking(),
            'admin.out' => Order::allOutForDelivery(),
            'admin.delivered' => Order::allCompleted(),
            'admin.cancelled' => Order::allCancelled(),
        ];
    }

    public function render()
    {
        return view('livewire.admin.category');
    }
}
