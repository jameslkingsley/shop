<?php

namespace App\Http\Livewire;

use App\Product;
use Livewire\Component;

class NewOrderItem extends Component
{
    public $productId;

    public function lookup()
    {
        if ($product = Product::find($this->productId)) {
            $this->emitUp('createOrderItem', [
                'quantity' => 1,
                'product_id' => $product->prodID,
                'amount' => $product->prodOurPrice * 100,
            ]);
        }
    }

    public function render()
    {
        return view('livewire.new-order-item');
    }
}
