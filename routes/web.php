<?php

use Illuminate\Support\Facades\Route;

Route::get('/checkout/complete', 'OrderCompletionController@store');

Route::livewire('/login', 'login')->layout('layouts.wire')->name('login');

Route::livewire('/orders', 'orders')->layout('layouts.wire')->middleware('auth');

Route::view('/{any?}', 'layouts.app')->where('any', '^(?!api).*$');
