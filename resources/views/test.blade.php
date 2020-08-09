<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="font-sans bg-white antialiased overflow-y-scroll">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Admin &mdash; {{ $title ?? config('app.name') }}</title>

        <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
        <link href="{{ mix('css/app.css') }}" rel="stylesheet" />

        @yield('head')
        @livewireStyles

        <script type="text/javascript" src="{{ mix('js/manifest.js') }}"></script>
        <script type="text/javascript" src="{{ mix('js/vendor.js') }}"></script>
        <script type="text/javascript" src="{{ mix('js/app.js') }}"></script>

        @yield('scripts')
    </head>

    <body class="text-gray-900 leading-normal text-base">
        <main class="p-20">
            @yield('content')
        </main>

        @livewireScripts

        <script>
            window.App = new CreateApp()
        </script>
    </body>
</html>
