<?php

namespace App\Http\Livewire;

use App\Address;
use Livewire\Component;

class CheckoutAddress extends Component
{
    public $address;
    public bool $active;

    protected $listeners = [
        'addressSelected',
    ];

    public function mount(Address $address, bool $active = false)
    {
        $this->address = $address;
        $this->active = $active;
    }

    public function addressSelected($address)
    {
        $this->active = $address['id'] === $this->address->id;
    }

    public function select()
    {
        $this->emit('addressSelected', $this->address);
    }

    public function render()
    {
        return view('livewire.checkout-address');
    }
}
