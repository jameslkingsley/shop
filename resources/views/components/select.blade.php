<div x-data="Components.Select()" {{ $attributes->merge([
    'class' => 'relative inline-flex flex-col max-w-xs cursor-pointer select-none'
]) }}>
    <div @click="open = ! open" x-bind:class="{ 'bg-gray-200': open }" class="flex items-center justify-start bg-gray-100 hover:bg-gray-200 rounded-lg text-sm leading-normal rounded-md px-5 py-3 transition-all duration-150 ease-in-out hover:duration-0">
        <span x-ref="label" class="flex-1">{{ $label }}</span>
        <x:icon-cheveron-down class="w-5 h-5 fill-current opacity-50" />
    </div>

    <div x-show="open" @click.away="open = false" class="absolute top-full z-50 flex flex-col w-full text-sm leading-normal rounded-lg bg-gray-100 mt-px p-2">
        {{ $slot }}
    </div>
</div>
