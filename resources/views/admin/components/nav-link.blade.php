<a href="{{ route($route) }}" class="{{ $isActive() ? 'text-blue-300' : 'text-gray-500' }} hover:text-blue-300 group relative w-14 h-14 rounded-full transition-all duration-150 ease-in-out">
    <div class="absolute z-20 inset-0 flex items-center justify-center">
        @svg($icon, 'w-12 h-12 z-20')
    </div>

    <div class="{{ $isActive() ? '' : 'scale-0 group-hover:scale-100' }} bg-blue-900 absolute z-10 inset-0 rounded-full transform transition-all duration-150 ease-in-out"></div>
</a>
