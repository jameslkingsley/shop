<?php

namespace App\Http\Livewire;

use Livewire\Component;

class OrderItem extends Component
{
    public $item;
    public $amount;
    public $quantity;

    public function mount(\App\OrderItem $item)
    {
        $this->item = $item;
        $this->quantity = $item->quantity;
        $this->amount = $item->amount / 100;
    }

    public function updatedAmount() {
        $this->item->update(['amount' => $this->amount * 100]);

        $this->emitUp('refresh');
    }

    public function updatedQuantity() {
        $this->item->update(['quantity' => $this->quantity]);

        $this->emitUp('refresh');
    }

    public function remove()
    {
        $this->item->delete();

        $this->emitUp('refresh');
    }

    public function render()
    {
        return view('livewire.order-item');
    }
}
