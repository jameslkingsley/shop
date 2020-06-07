<?php

namespace App\Http\Livewire\Admin;

use App;
use Livewire\Component;

class Order extends Component
{
    public $order;

    public function mount(?int $orderId)
    {
        $this->order = App\Order::find($orderId);
    }

    public function render()
    {
        if ($this->order) {
            return view('livewire.admin.order');
        }

        return view('admin.empty', [
            'text' => 'Nothing to see here',
        ]);
    }
}
