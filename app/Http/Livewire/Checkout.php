<?php

namespace App\Http\Livewire;

use App\Order;
use Livewire\Component;
use App\Actions\OrderCreateAction;
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
     * Any additional order comments.
     */
    public ?string $comment;

    /**
     * Whether to allow substitutions.
     */
    public ?bool $substitutions;

    /**
     * Mount the checkout component.
     */
    public function mount()
    {
        $this->cards = auth()->user()->cards;
        $this->addresses = auth()->user()->addresses;

        $this->cardId = session('checkout.cardId', auth()->user()->primaryCard()->id ?? null);
        $this->addressId = session('checkout.addressId', auth()->user()->primaryAddress()->id ?? null);

        $this->comment = session('checkout.comment', null);
        $this->collection = session('checkout.collection', false);
        $this->substitutions = session('checkout.substitutions', true);

        $this->deliveryDate = session('checkout.deliveryDate', $this->nearestDeliveryDate());
    }

    /**
     * Place the customer's order.
     *
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function placeOrder(OrderCreateAction $createOrder, array $basket)
    {
        $this->authorize('create', Order::class);

        $order = $createOrder->execute($basket, $this->orderAttributes());

        $this->forgetState();

        $this->emit('order-placed', $order->id);
    }

    /**
     * Forget the checkout session state.
     */
    public function forgetState()
    {
        session()->forget([
            'checkout.cardId',
            'checkout.addressId',
            'checkout.comment',
            'checkout.collection',
            'checkout.substitutions',
            'checkout.deliveryDate',
        ]);
    }

    /**
     * Get the order creation attributes.
     */
    public function orderAttributes(): array
    {
        return [
            'card_id' => $this->cardId,
            'comment' => $this->comment,
            'collection' => $this->collection,
            'substitutions' => $this->substitutions,
            'address_id' => $this->collection ? null : $this->addressId,
            'delivery_date' => now()->parse($this->deliveryDate)->toDateString(),
        ];
    }

    /**
     * Persist the checkout state to the session whenever it changes.
     */
    public function updated($name, $value)
    {
        session(["checkout.{$name}" => $value]);
    }

    /**
     * Determine the nearest available delivery date.
     */
    protected function nearestDeliveryDate(): string
    {
        $date = now();

        if ($date->hour >= static::$deliveryCutOffTime) {
            return $date->addDays($date->isSaturday() ? 2 : 1)->toDateString();
        }

        return $date->toDateString();
    }

    /**
     * Get the card model instance.
     */
    public function getCardProperty()
    {
        return auth()->user()->cards()->find($this->cardId);
    }

    /**
     * Get the address model instance.
     */
    public function getAddressProperty()
    {
        return auth()->user()->addresses()->find($this->addressId);
    }

    /**
     * Render the Livewire component.
     */
    public function render()
    {
        return view('livewire.checkout');
    }
}
