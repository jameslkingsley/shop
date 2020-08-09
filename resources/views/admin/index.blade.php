<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="font-sans bg-background antialiased overflow-y-scroll">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Admin &mdash; {{ $title ?? config('app.name') }}</title>

        <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">

        @yield('head')
        @livewireStyles

        <script type="text/javascript" src="{{ mix('js/manifest.js') }}"></script>
        <script type="text/javascript" src="{{ mix('js/vendor.js') }}"></script>
        <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
    </head>

    <body class="text-gray-900 leading-normal text-base">
        <header class="fixed left-0 top-0 bottom-0 w-20 bg-gray-800">
            <nav class="flex py-4 flex-col w-full h-full items-center justify-start">
                <div class="flex flex-col space-y-4 w-full flex-1 items-center justify-start">
                    <x-admin-nav-link icon="inbox" label="New Orders" route="admin.pending" />
                    <x-admin-nav-link icon="cart" label="Being Picked" route="admin.picking" />
                    <x-admin-nav-link icon="tag" label="Out for Delivery" route="admin.out" />
                    <x-admin-nav-link icon="delivered" label="Delivered" route="admin.delivered" />
                    <x-admin-nav-link icon="cancelled" label="Cancelled" route="admin.cancelled" />
                </div>

                <div class="flex flex-col space-y-4 w-full flex-shrink-0 items-center justify-start">
                    <x-admin-nav-link icon="shop-settings" label="Settings" route="admin.settings" />
                </div>
            </nav>
        </header>

        <main class="pl-20 overflow-x-hidden">
            @yield('content')
        </main>

        @livewireScripts

        <script>
            window.App = new CreateApp()
        </script>

        @yield('scripts')
    </body>
</html>
