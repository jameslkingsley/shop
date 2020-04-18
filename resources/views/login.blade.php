<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="bg-background antialiased overflow-y-scroll">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name') }}</title>

        <link rel="icon" type="image/png" href="{{ asset('favicon.png') }}" />
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>

    <body class="text-gray-900 leading-normal text-base">
        <div class="block w-full h-screen flex items-center justify-center">
            <div class="w-full xl:w-1/3 bg-white shadow xl:rounded p-6">
                <form action="{{ url('/login') }}" method="post">
                    {{ csrf_field() }}

                    <label>
                        <span>Please enter the administrator password.</span>
                        <input name="password" type="password" placeholder="Password" />
                    </label>

                    <div class="block w-full text-right mt-4">
                        <button type="submit" class="px-4 btn-primary py-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    </body>
</html>
