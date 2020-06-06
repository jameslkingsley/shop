<?php

namespace App\Http\Livewire;

use App;
use Livewire\Component;
use App\Actions\CancelOrderAction;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Order extends Component
{
    use AuthorizesRequests;

    public $order;

    public function mount(App\Order $order)
    {
        $this->order = $order->load('items.product');
    }

    public function cancel(CancelOrderAction $cancelOrder)
    {
        $this->authorize('delete', $this->order);

        $cancelOrder->execute($this->order);

        return redirect(route('orders'));
    }

    public function render()
    {
        return view('livewire.order');
    }
}
