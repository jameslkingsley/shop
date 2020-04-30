<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="antialiased">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name') }}</title>

        <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>

    <body class="text-gray-900 leading-normal text-sm">
        @forelse($orders as $order)
            @include('order-printable', compact('order'))
        @empty
            No orders for this group.
        @endforelse

        <script>
            // window.print()
        </script>
    </body>
</html>
