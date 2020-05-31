<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class AvailableDeliveryDate implements Rule
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
        $date = now()->parse($value);

        if ($date->isPast()) {
            return false;
        }

        if ($date->isSunday()) {
            return false;
        }

        if ($date->isToday() && now()->hour >= 14) {
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
        return 'The delivery date is not available.';
    }
}
