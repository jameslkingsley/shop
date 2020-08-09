<div>
    <x:select wire:model="number">
        <x:slot name="label">
            {{ $this->options()[$number] ?? 'Select a number...' }}
        </x:slot>

        @foreach ($this->options() as $value => $label)
            <x:select-item :value="$value">
                {{ $label }}
            </x:select-item>
        @endforeach
    </x:select>

    <br /><br /><br /><br />

    <x:select wire:model="anotherNumber">
        <x:slot name="label">
            {{ $this->options()[$anotherNumber] ?? 'Select another number...' }}
        </x:slot>

        @foreach ($this->options() as $value => $label)
            <x:select-item :value="$value">
                {{ $label }}
            </x:select-item>
        @endforeach
    </x:select>
</div>
