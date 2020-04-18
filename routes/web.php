<?php

use Illuminate\Support\Facades\Route;

Route::get('/dispatch/{group}', 'DispatchController@index')->middleware('auth');

Route::get('/checkout/cancel', 'OrderCancelController@store');
Route::get('/checkout/complete', 'OrderCompletionController@store');

Route::get('/logout', 'LoginController@destroy')->middleware('auth');
Route::view('/login', 'login')->name('login');
Route::post('/login', 'LoginController@store');

Route::view('/orders', 'layouts.app')->middleware('auth');

Route::view('/{any?}', 'layouts.app')->where('any', '^(?!api).*$');
