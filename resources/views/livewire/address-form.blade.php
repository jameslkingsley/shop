<div class="flex flex-col space-y-6">
    <div>
        <label for="name">Full Name</label>
        <input id="name" aria-label="Full Name" wire:model.lazy="name" required class="form-input" placeholder="Full Name" />
    </div>

    <div>
        <label for="telephone">Telephone</label>
        <input id="telephone" type="tel" aria-label="Telephone" wire:model.lazy="telephone" required class="form-input" placeholder="Telephone" />
    </div>

    <div>
        <label for="line1">Address Line 1</label>
        <input id="line1" aria-label="Address Line 1" wire:model.lazy="line1" required class="form-input" placeholder="Address Line 1" />
    </div>

    <div>
        <label for="line2">Address Line 2 (optional)</label>
        <input id="line2" aria-label="Address Line 2" wire:model.lazy="line2" class="form-input" placeholder="Address Line 2" />
    </div>

    <div class="flex items-center space-x-6">
        <div>
            <label for="city">City</label>
            <input id="city" aria-label="City" value="{{ $city }}" class="form-input" placeholder="City" disabled />
        </div>

        <div>
            <label for="postcode">Postcode</label>
            <input id="postcode" aria-label="Postcode" wire:model.lazy="postcode" class="form-input" placeholder="Postcode" />
        </div>
    </div>

    <div>
        <button @if (! $this->canAddAddress) disabled @endif wire:click="save" class="btn w-full">Add Address</button>
    </div>
</div>
