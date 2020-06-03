<?php

namespace App\Http\Livewire\Concerns;

use App\Actions\Action;
use Illuminate\Support\Arr;
use Illuminate\Validation\ValidationException;

trait ActionValidation
{
    public function canRunAction(Action $action, array $attributes, array $excludeRules = [])
    {
        try {
            $action->validate(
                $attributes, Arr::except($action->rules(), $excludeRules)
            );
        } catch (ValidationException $exception) {
            return false;
        }

        return true;
    }
}
