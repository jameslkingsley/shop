<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

Route::get('/dispatch/{group}', 'DispatchController@index')->middleware('auth');
Route::get('/print/{order}', 'OrderPrintController@show')->middleware('auth');

Route::get('/checkout/cancel', 'OrderCancelController@store');
Route::get('/checkout/complete', 'OrderCompletionController@store');

// Route::get('/logout', 'LoginController@destroy')->middleware('auth');
// Route::view('/login', 'auth.login')->name('login');
// Route::post('/login', 'LoginController@store');

// Route::view('/orders', 'layouts.app')->middleware('auth');

Route::get('/basket', 'BasketController@index')->name('basket');
Route::get('/checkout', 'CheckoutController@index')->name('checkout');
Route::get('/orders', fn () => 'orders')->name('orders');
Route::get('/settings', fn () => 'settings')->name('settings');

Route::get('/', 'HomeController@index')->name('home');
Route::get('/group/{group}', 'HomeController@group');
Route::get('/group/{group}/{category}', 'HomeController@category');

// Route::view('/{any?}', 'layouts.app')->where('any', '^(?!api).*$');
