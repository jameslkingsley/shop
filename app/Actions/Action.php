<?php

namespace App\Actions;

use Illuminate\Support\Facades\Validator;

abstract class Action
{
    /**
     * Validate the given attributes.
     *
     * @return array
     */
    public function validate(array $attributes = [], ?array $rules = null)
    {
        return Validator::make($attributes, $rules ?: $this->rules())
            ->validate();
    }

    /**
     * Get the current user.
     *
     * @return \Illuminate\Contracts\Auth\Authenticatable|null
     */
    protected function user()
    {
        return auth()->user();
    }
}
