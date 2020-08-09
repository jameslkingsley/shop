<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Test extends Component
{
    public $number;
    public $anotherNumber;

    public function options()
    {
        return [
            1 => 'One',
            2 => 'Two',
            3 => 'Three',
            4 => 'Four',
        ];
    }

    public function render()
    {
        return view('livewire.test');
    }
}
