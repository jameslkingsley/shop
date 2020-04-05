<?php

namespace App\Http\Livewire;

use Livewire\Component;
use Illuminate\Support\Facades\Artisan;

class Admin extends Component
{
    public bool $fetched = false;

    public function fetchBookerImages()
    {
        Artisan::queue('fetch-booker-images');

        $this->fetched = true;
    }

    public function render()
    {
        return view('livewire.admin');
    }
}
