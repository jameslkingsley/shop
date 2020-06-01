<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class SufficientBasketRule implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $items = collect($value)
            ->filter(fn ($item) => $item['qty'] > 0);

        if ($items->isEmpty()) {
            return false;
        }

        if ($items->map(fn ($item) => $item['qty'] * $item['price'])->sum() <= 500) {
            return false;
        }

        return true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The basket items are insufficient.';
    }
}
