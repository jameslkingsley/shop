<div x-data="Wire.Stripe({{ json_encode(compact('apiKey', 'intent')) }})" x-init="setup" class="flex flex-col space-y-6">
    <div>
        <label for="name">Cardholder Name</label>
        <input id="name" aria-label="Cardholder Name" x-model="name" required class="form-input" placeholder="Cardholder Name" />
    </div>

    <div>
        <label for="card-element">Credit or debit card</label>

        <div wire:ignore id="card-element" x-ref="card" class="form-input flex items-center justify-center" style="min-height: 38px">
            {{-- Stripe card element will be inserted here. --}}
        </div>

        <span x-show="error" x-text="error" class="text-red-600 text-xs mt-1"></span>
    </div>

    <div>
        <button @click="submit(@this)" x-bind:loading="processing" class="btn w-full">Add Card</button>
    </div>
</div>
