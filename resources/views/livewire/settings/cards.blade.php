<div class="grid grid-cols-2 gap-6 w-full">
    @foreach ($cards as $card)
        <div class="bg-gray-100 rounded-md p-6">
            {{ $card->brand }}
        </div>
    @endforeach

    <div class="flex items-center justify-center space-x-2 bg-background font-semibold text-blue-600 hover:text-blue-500 cursor-pointer select-none rounded-md p-6">
        <x:icon-add-outline class="w-4 h-4 fill-current" />
        <span>Add Card</span>
    </div>
</div>
