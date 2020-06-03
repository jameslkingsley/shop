<?php

namespace App\Actions;

use App\Address;

class CreateAddressAction extends Action
{
    /**
     * Execute the action.
     */
    public function execute(array $attributes): Address
    {
        $this->validate($attributes);

        return $this->user()->addresses()->create($attributes);
    }

    /**
     * Get the action validation rules.
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:50'],
            'line1' => ['required', 'string', 'max:50'],
            'line2' => ['nullable', 'string', 'max:50'],
            'city' => ['required', 'string', 'max:50'],
            'postcode' => ['required', 'string', 'max:10'],
            'telephone' => ['required', 'string', 'max:30'],
        ];
    }
}
