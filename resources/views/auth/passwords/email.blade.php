@extends('layouts.app')

@section('content')
    <div class="flex items-center justify-center bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full">
            <div>
                <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                    Reset your password
                </h2>

                <p class="mt-2 text-center leading-5 text-gray-600">
                    Or
                    <a href="{{ route('login') }}" class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                        login to your account
                    </a>
                </p>
            </div>

            <form class="mt-8" action="{{ route('password.email') }}" method="POST">
                @csrf

                <div class="flex flex-col space-y-6">
                    @if (session('status'))
                        <div class="text-sm rounded-md text-green-700 bg-green-100 py-4 px-6 font-medium" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    <div>
                        <label for="email" class="block w-full text-sm mb-1 text-black">Email Address</label>

                        <input id="email" aria-label="Email address" name="email" type="email" required class="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5 @error('email') border-red-600 focus:border-red-300 @enderror" placeholder="Email address" />

                        @error('email')
                        <p class="text-red-600 text-xs mt-1">
                            {{ $message }}
                        </p>
                        @enderror
                    </div>
                </div>

                <div class="mt-6">
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-500 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-blue-500 group-hover:text-blue-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        Send Password Reset Link
                    </button>
                </div>
            </form>
        </div>
    </div>
@endsection
