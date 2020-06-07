<?php

namespace App\Http\Livewire\Settings;

use Livewire\Component;

class Cards extends Component
{
    public $cards;

    public function mount()
    {
        $this->cards = auth()->user()->cards;
    }

    public function render()
    {
        return view('livewire.settings.cards');
    }
}
