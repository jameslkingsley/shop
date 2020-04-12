<?php

namespace App\Http\Livewire;

use App\Product;
use Livewire\Component;
use Stripe\PaymentIntent;
use Illuminate\Support\Facades\DB;

class Order extends Component
{
    public $order;
    public $amount;
    public $searchQuery;
    public $searchResults = [];
    public bool $expanded = false;

    protected $listeners = ['refresh'];

    public function mount(\App\Order $order)
    {
        $this->order = $order;
    }

    public function addProductToOrder($productId)
    {
        if ($product = Product::find($productId)) {
            $this->order->items()->create([
                'quantity' => 1,
                'product_id' => $product->prodID,
                'amount' => $product->prodOurPrice * 100,
            ]);

            $this->searchResults = [];
            $this->searchQuery = null;

            $this->refresh();
        }
    }

    public function updatedExpanded()
    {
        $this->emitUp('orderExpanded', $this->expanded);
    }

    public function updatedSearchQuery()
    {
        if (! $this->searchQuery) {
            return $this->searchResults = [];
        }

        $this->searchResults = DB::connection('sle')->select('
            SELECT prodID AS id, prodRef as ref, prodTitle AS title, prodUnitSize AS unit_size, CAST((prodOurPrice * 100) AS SIGNED) AS price
            FROM tblProducts
            WHERE prodStatus = "active"
            AND prodLastBought > DATE_ADD(NOW(), INTERVAL -180 DAY)
            AND prodOurPrice != 0
            AND (
                prodTitle LIKE "%'.$this->searchQuery.'%"
                OR prodID = CONVERT("'.$this->searchQuery.'", SIGNED INTEGER)
            )
            ORDER BY prodTitle, prodUnitSize, prodID
        ');
    }

    public function refresh()
    {
        $this->order->refresh();
    }

    public function startPicking()
    {
        $this->order->update(['picking_at' => now()]);
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

    public function confirmPayment()
    {
        $this->order->update(['charged_at' => now()]);

        $this->refresh();

        $this->emitUp('fetch');
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

    public function render()
    {
        return view('livewire.order', [
            'groups' => collect(Orders::GROUP_COLORS),
        ]);
    }
}
