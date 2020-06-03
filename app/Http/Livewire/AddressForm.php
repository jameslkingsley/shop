<?php

namespace App\Http\Livewire;

use App\Address;
use Livewire\Component;
use App\Actions\CreateAddressAction;
use App\Http\Livewire\Concerns\ActionValidation;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;

class AddressForm extends Component
{
    use AuthorizesRequests, ActionValidation;

    public $name;
    public $line1;
    public $line2;
    public $postcode;
    public $telephone;
    public $city = 'Truro';

    public function save(CreateAddressAction $createAddress)
    {
        $this->authorize('create', Address::class);

        $address = $createAddress->execute($this->attributes());

        $this->emit('addressAdded', $address->id);
    }

    public function attributes(): array
    {
        return [
            'name' => $this->name,
            'line1' => $this->line1,
            'line2' => $this->line2,
            'city' => $this->city,
            'postcode' => $this->postcode,
            'telephone' => $this->telephone,
        ];
    }

    public function getCanAddAddressProperty(): bool
    {
        return $this->canRunAction(
            new CreateAddressAction, $this->attributes()
        );
    }

    public function render()
    {
        return view('livewire.address-form');
    }
}
