<?php

namespace App\Actions;

use App\Order;
use App\Product;
use Illuminate\Support\Collection;
use App\Rules\SufficientBasketRule;
use App\Rules\AvailableDeliveryDateRule;

class OrderCreateAction extends Action
{
    /**
     * Execute the action.
     */
    public function execute(array $basket, array $attributes): Order
    {
        $this->validate(array_merge($attributes, ['items' => $basket]));

        $order = $this->user()->orders()->create($attributes);

        $order->items()->createMany(
            $this->mapToOrderItems(collect($basket))
        );

        return $order;
    }

    /**
     * Get the action validation rules.
     */
    protected function rules(): array
    {
        return [
            'items' => ['required', 'array', new SufficientBasketRule],
            'card_id' => ['required', 'exists:cards,id'],
            'address_id' => ['required_if:collection,false', 'exists:addresses,id'],
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
