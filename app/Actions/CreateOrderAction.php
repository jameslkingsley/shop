<?php

namespace App\Actions;

use App\Order;
use App\Product;
use Illuminate\Support\Collection;
use App\Rules\SufficientBasketRule;
use App\Rules\AvailableDeliveryDateRule;
use App\Notifications\OrderPlacedNotification;
use App\Notifications\OrderUpdatedNotification;

class CreateOrderAction extends Action
{
    /**
     * Create or update the order.
     */
    public function execute(array $basket, array $attributes, ?Order $order = null): Order
    {
        $isUpdatingOrder = $order !== null;

        $this->validate(array_merge($attributes, ['items' => $basket]));

        $order = $order === null
            ? $this->user()->orders()->create($attributes)
            : tap($order)->update($attributes);

        $order->items()->delete();

        $order->items()->createMany(
            $this->mapToOrderItems(collect($basket))
        );

        $this->dispatchEvents($order, $isUpdatingOrder);

        return $order;
    }

    protected function dispatchEvents(Order $order, bool $isUpdatingOrder)
    {
        if ($isUpdatingOrder) {
            return $this->user()->notify(new OrderUpdatedNotification($order));
        }

        $this->user()->notify(new OrderPlacedNotification($order));
    }

    /**
     * Get the action validation rules.
     */
    public function rules(): array
    {
        return [
            'items' => ['required', 'array', new SufficientBasketRule],
            'card_id' => ['required', 'exists:cards,id'],
            'address_id' => ['exclude_if:collection,true', 'exists:addresses,id'],
            'collection' => ['required', 'boolean'],
            'substitutions' => ['required', 'boolean'],
            'comment' => ['nullable', 'string'],
            'delivery_date' => ['required', 'string', new AvailableDeliveryDateRule],
        ];
    }

    /**
     * Map the basket items to order items,
     * fetching the product prices from the database.
     */
    protected function mapToOrderItems(Collection $items): Collection
    {
        $prices = Product::sourceItemPrices($items);

        return $items->map(function ($item) use ($prices) {
            return [
                'quantity' => $item['qty'],
                'product_id' => $item['id'],
                'amount' => $prices[$item['id']],
            ];
        });
    }
}
