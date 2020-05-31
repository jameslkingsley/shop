<?php

namespace App\Http\Livewire;

use App\Order;
use Livewire\Component;
use App\Rules\AvailableDeliveryDate;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class Checkout extends Component
{
    use AuthorizesRequests;

    /**
     * 24-hour time when the delivery day gets cutoff.
     */
    protected static int $deliveryCutOffTime = 14;

    /**
     * The selected card ID.
     */
    public ?int $cardId;

    /**
     * The selected address ID.
     */
    public ?int $addressId;

    /**
     * List of available cards.
     */
    public $cards;

    /**
     * List of available addresses.
     */
    public $addresses;

    /**
     * Whether this is a collection order.
     */
    public ?bool $collection;

    /**
     * The chosen delivery date in the format YYYY-MM-DD.
     */
    public ?string $deliveryDate;

    /**
     * Whether to allow substitutions.
     */
    public ?bool $substitutions;

    public function mount()
    {
        $this->cards = auth()->user()->cards;
        $this->addresses = auth()->user()->addresses;

        $this->cardId = session('checkout.cardId', auth()->user()->primaryCard()->id ?? null);
        $this->addressId = session('checkout.addressId', auth()->user()->primaryAddress()->id ?? null);

        $this->collection = session('checkout.collection', false);
        $this->substitutions = session('checkout.substitutions', true);

        $this->deliveryDate = session('checkout.deliveryDate', $this->nearestDeliveryDate());
    }

    public function placeOrder(array $basket)
    {
        $this->authorize('create', Order::class);

        $attributes = $this->validate([
            'cardId' => ['required', 'exists:cards,id'],
            'addressId' => ['required', 'exists:addresses,id'],
            'collection' => ['required', 'boolean'],
            'substitutions' => ['required', 'boolean'],
            'deliveryDate' => ['required', 'string', new AvailableDeliveryDate],
        ]);

        $items = [];

        foreach ($basket as $item) {
            $items[] = [
                'product_id' => $item['id'],
                'amount' => $item['price'],
                'quantity' => $item['qty'],
            ];
        }

        // Attributes is wrong here, need to use snake case,
        // and also missing the comments field.
        $order = Order::create($attributes);
        $order->items()->createMany($items);
    }

    public function updated($name, $value)
    {
        session(["checkout.{$name}" => $value]);
    }

    protected function nearestDeliveryDate()
    {
        $date = now();

        if ($date->hour >= static::$deliveryCutOffTime) {
            return $date->addDays($date->isSaturday() ? 2 : 1)->toDateString();
        }

        return $date->toDateString();
    }

    public function getCardProperty()
    {
        return auth()->user()->cards()->find($this->cardId);
    }

    public function getAddressProperty()
    {
        return auth()->user()->addresses()->find($this->addressId);
    }

    public function render()
    {
        return view('livewire.checkout');
    }
}
