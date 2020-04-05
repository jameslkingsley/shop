<div class="flex flex-wrap items-start justify-between w-full py-4 sm:py-8 px-4 sm:px-10">
    @if ($fetched)
        <span>Fetched! Check back in 5 minutes</span>
    @else
        <button wire:click="fetchBookerImages" class="btn-primary px-6">
            Fetch Booker Images
        </button>
    @endif
</div>
