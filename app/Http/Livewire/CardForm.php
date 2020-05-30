<?php

namespace App\Http\Livewire;

use Stripe;
use Livewire\Component;
use Illuminate\Support\Str;

class CardForm extends Component
{
    /**
     * Store the newly added Stripe payment method on the user's account.
     *
     * @throws \Stripe\Exception\ApiErrorException
     */
    public function store(string $name, string $paymentMethodId)
    {
        $paymentMethod = Stripe\PaymentMethod::retrieve($paymentMethodId);

        auth()->user()->cards()->create([
            'name' => $name,
            'stripe_id' => $paymentMethod->id,
            'last_four' => $paymentMethod->card->last4,
            'brand' => Str::studly($paymentMethod->card->brand),
            'primary' => auth()->user()->cards()->count() === 0,
        ]);
    }

    public function render()
    {
        return view('livewire.card-form', [
            'apiKey' => config('services.stripe.key'),
            'intent' => Stripe\SetupIntent::create([
                'customer' => auth()->user()->stripeId(),
            ]),
        ]);
    }
}
