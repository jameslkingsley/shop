<?php

namespace App\Http\Livewire;

use App\Product;
use Livewire\Component;
use Stripe\PaymentIntent;

class Order extends Component
{
    public $order;
    public $amount;
    public $productId;
    public $originalAmount;
    public bool $expanded = false;

    protected $listeners = ['refresh'];

    public function mount(\App\Order $order)
    {
        $this->order = $order;
        $this->originalAmount = $order->total;
    }

    public function refresh()
    {
        $this->order->refresh();
    }

    public function increaseBags()
    {
        $this->order->increment('bags');

        $this->refresh();
    }

    public function decreaseBags()
    {
        if ($this->order->bags === 0) {
            return;
        }

        $this->order->decrement('bags');

        $this->refresh();
    }

    public function increaseOrder()
    {
        $this->order->increment('order');

        $this->refresh();
        $this->emitUp('fetch');
    }

    public function decreaseOrder()
    {
        if ($this->order->order === 0) {
            return;
        }

        $this->order->decrement('order');

        $this->refresh();
        $this->emitUp('fetch');
    }

    public function assignToGroup($group)
    {
        $this->order->update([
            'group' => $this->order->group === $group ? null : $group,
        ]);

        $this->emit('fetch');
    }

    public function takePayment()
    {
        PaymentIntent::create([
            'confirm' => true,
            'currency' => 'gbp',
            'off_session' => true,
            'amount' => $this->order->total,
            'payment_method_types' => ['card'],
            'customer' => $this->order->customer_id,
            'payment_method' => $this->order->payment_method_id,
        ]);

        $this->order->update(['charged_at' => now()]);

        $this->refresh();

        $this->emitUp('fetch');
    }

    public function markAsDelivered()
    {
        $this->expanded = false;
        $this->order->update(['delivered_at' => now()]);

        $this->refresh();

        $this->emitUp('fetch');
    }

    public function markAsUndelivered()
    {
        $this->expanded = false;
        $this->order->update(['delivered_at' => null]);

        $this->refresh();

        $this->emit('fetch');
    }

    public function createOrderItem()
    {
        if ($product = Product::find($this->productId)) {
            $this->order->items()->create([
                'quantity' => 1,
                'product_id' => $product->prodID,
                'amount' => $product->prodOurPrice * 100,
            ]);

            $this->refresh();
            $this->productId = null;
        }
    }

    public function render()
    {
        return view('livewire.order', [
            'groups' => collect(Orders::GROUP_COLORS),
        ]);
    }
}
