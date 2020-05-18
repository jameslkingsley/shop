<nav class="sticky top-0 z-50 bg-blue-500 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between md:space-x-8 h-16">
            <div class="hidden md:flex items-center text-white">
                <a href="{{ url('/') }}" class="inline-flex flex-col flex-shrink-0">
                    <span class="font-bold text-lg">Shortlanesend Store</span>
                    <span class="text-xs">Call us on <strong>01872 275102</strong></span>
                </a>
            </div>

            <div x-data="{ open: false }" class="flex md:hidden mr-3">
                <button @click="open = ! open" class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-700 focus:text-white">
                    <svg x-show="! open" class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    <svg x-show="open" class="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div x-show="open"
                    x-transition:enter="transition ease-out duration-100"
                    x-transition:enter-start="transform opacity-0 scale-95"
                    x-transition:enter-end="transform opacity-100 scale-100"
                    x-transition:leave="transition ease-in duration-75"
                    x-transition:leave-start="transform opacity-100 scale-100"
                    x-transition:leave-end="transform opacity-0 scale-95"
                    class="fixed z-50 inset-0 bg-white mt-16">
                    Foo
                </div>
            </div>

            <div class="hidden md:block flex-1">
                @include('layouts.search')
            </div>

            <div class="block">
                <div class="ml-4 flex items-center md:ml-6">
                    <span class="hidden lg:block text-white text-sm text-blue-100 mr-4">Click to checkout &rarr;</span>

                    <a href="{{ url('/basket') }}" class="inline-flex items-center text-white font-bold">
                        @svg('bag', 'w-5 h-5 mr-2 fill-current')
                        <span x-text="toCurrency(total())" class="font-number"></span>
                    </a>

                    <div x-data="{ open: false }" class="ml-6 relative">
                        <div>
                            <button @click="open = ! open" x-bind:class="{ 'bg-blue-700': open }" class="max-w-xs bg-blue-600 inline-flex items-center text-base font-medium px-4 py-1 rounded-full text-white focus:outline-none transition-all duration-200 ease-in-out" id="user-menu" aria-label="User menu" aria-haspopup="true">
                                James
                                @svg('cheveron-down', 'w-4 h-4 fill-current', ['x-show' => '! open'])
                                @svg('cheveron-up', 'w-4 h-4 fill-current', ['x-show' => 'open'])
                            </button>
                        </div>

                        <div x-show="open" @click.away="open = false"
                            x-transition:enter="transition ease-out duration-100"
                            x-transition:enter-start="transform opacity-0 scale-95"
                            x-transition:enter-end="transform opacity-100 scale-100"
                            x-transition:leave="transition ease-in duration-75"
                            x-transition:leave-start="transform opacity-100 scale-100"
                            x-transition:leave-end="transform opacity-0 scale-95"
                            class="origin-top-right absolute z-50 right-0 mt-2 w-48 rounded-md shadow-lg">

                            <div class="py-1 rounded-md bg-white shadow-xs" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Orders</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--
      Mobile menu, toggle classes based on menu state.

      Open: "block", closed: "hidden"
    -->
    <div class="hidden md:hidden">
        <div class="px-2 pt-2 pb-3 sm:px-3">
            <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700">Dashboard</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Team</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Projects</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Calendar</a>
            <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Reports</a>
        </div>
        <div class="pt-4 pb-3 border-t border-gray-700">
            <div class="flex items-center px-5">
                <div class="flex-shrink-0">
                    <img class="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div>
                <div class="ml-3">
                    <div class="text-base font-medium leading-none text-white">Tom Cook</div>
                    <div class="mt-1 text-sm font-medium leading-none text-gray-400">tom@example.com</div>
                </div>
            </div>
            <div class="mt-3 px-2">
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Your Profile</a>
                <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Settings</a>
                <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700">Sign out</a>
            </div>
        </div>
    </div>
</nav>
