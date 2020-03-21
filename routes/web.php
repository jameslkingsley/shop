<?php

use Illuminate\Support\Facades\Route;

Route::get('/checkout/complete', 'OrderCompletionController@store');

Route::view('/{any?}', 'app')->where('any', '^(?!api).*$');
