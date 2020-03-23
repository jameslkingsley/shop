<?php

use Illuminate\Support\Facades\Route;

Route::post('/login', 'LoginController@store');

Route::get('/product/{group}', 'GroupController@products');

Route::get('/group', 'GroupController@index');
Route::get('/group/{group}', 'CategoryController@index');
Route::get('/group/{group}/{category}', 'ProductController@index');

Route::get('/basket', 'BasketController@index');
Route::put('/basket/{product}', 'BasketController@store');
Route::delete('/basket/{product}', 'BasketController@destroy');

Route::get('/order', 'OrderController@index');
Route::post('/order', 'OrderController@store');
Route::get('/order/{order}', 'OrderController@show');
Route::delete('/order/{order}/{orderItem}', 'OrderAmendmentController@destroy');
Route::post('/order/{order}/charge', 'OrderPaymentController@store');
Route::post('/order/{order}/delivered', 'OrderDeliveryController@store');
