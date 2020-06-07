<?php

namespace App\Http\Livewire\Admin;

use App\Order;
use Livewire\Component;

class Category extends Component
{
    public $route;
    public $title;
    public $orders;
    public ?int $orderId;

    protected static array $titles = [
        'admin.pending' => 'New Orders',
        'admin.picking' => 'Being Picked',
        'admin.out' => 'Out for Delivery',
        'admin.delivered' => 'Delivered',
    ];

    public function mount(?int $order = null)
    {
        $this->route = request()->route()->getName();
        $this->title = static::$titles[$this->route] ?? '';
        $this->orders = Order::all();
        $this->orderId = $order;
    }

    public function render()
    {
        return view('livewire.admin.category');
    }
}
