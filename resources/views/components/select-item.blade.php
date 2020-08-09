<div @click="select($event, $el)"
    x-bind:class="{ '!bg-blue-600 !text-white !opacity-100': $refs.label.innerText === '{{ $slot }}' }"
    {{ $attributes->merge([
        'class' => 'bg-transparent hover:bg-white rounded-md px-3 py-2 transition-all duration-150 ease-in-out hover:duration-0'
            . ($attributes->whereStartsWith('disabled')->first() ? ' opacity-25 pointer-events-none cursor-default' : '')
    ]) }}>
    {{ $slot }}
</div>
