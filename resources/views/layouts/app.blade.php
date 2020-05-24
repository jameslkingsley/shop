<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="font-sans bg-background antialiased overflow-y-scroll">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ $title ?? config('app.name') }}</title>

        <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">

        <script src="https://js.stripe.com/v3/" async></script>

        <script type="text/javascript" src="{{ mix('js/manifest.js') }}"></script>
        <script type="text/javascript" src="{{ mix('js/vendor.js') }}"></script>
        <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>
    </head>

    <body x-data="{}" x-subscribe class="text-gray-900 leading-normal text-base">
        @include('layouts.nav')

        <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
            <div class="block md:hidden mb-8">
                @include('layouts.search')
            </div>

            @yield('content')
        </main>

        <script>
            window.App = new CreateApp({
                user: @json(auth()->user()),
                csrfToken: @json(csrf_token()),
                isShutdown: @json($isShutdown),
                adminLoggedIn: @json(auth()->check()),
                stripeToken: @json(config('services.stripe.key')),
            })
        </script>
    </body>
</html>
