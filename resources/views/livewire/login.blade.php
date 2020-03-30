<div class="block w-full h-screen flex items-center justify-center">
    <div class="w-1/3 bg-white shadow rounded p-6">
        <label>
            <span>Please enter the administrator password, and hit enter.</span>
            <input wire:keydown.enter="login($event.target.value)" type="password" placeholder="Password" />
        </label>
    </div>
</div>
