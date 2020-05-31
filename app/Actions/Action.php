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
    protected function validate(array $attributes = [])
    {
        return Validator::make($attributes, $this->rules())
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
