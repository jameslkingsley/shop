<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="bg-background antialiased overflow-y-scroll">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ request()->path() === 'orders' ? 'SLE Orders' : config('app.name') }}</title>

        <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">

        <script src="https://js.stripe.com/v3/"></script>
    </head>

    <body class="text-gray-900 leading-normal text-base">
        <div id="app" v-cloak>
            @yield('content')
        </div>

        <script type="text/javascript" src="{{ asset('js/manifest.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/vendor.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>

        <script>
            window.App = new CreateApp({
                user: @json(auth()->user()),
                csrfToken: @json(csrf_token()),
                isShutdown: @json($isShutdown),
                adminLoggedIn: @json(auth()->check()),
                stripeToken: @json(config('services.stripe.key')),
                imageEndpoint: @json(config('services.image_resize.endpoint')),
            })

            window.App.boot()
        </script>
    </body>
</html>
