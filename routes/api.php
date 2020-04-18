<?php

use Illuminate\Support\Facades\Route;

Route::post('/login', 'LoginController@store');

Route::post('/search', 'SearchController@store');

Route::get('/product/{group}', 'GroupController@products');

Route::get('/group', 'GroupController@index');
Route::get('/group/{group}', 'CategoryController@index');
Route::get('/group/{group}/{category}', 'ProductController@index');

Route::get('/basket', 'BasketController@index');
Route::put('/basket/{product}', 'BasketController@store');
Route::delete('/basket/{product}', 'BasketController@destroy');

Route::post('/item/{orderItem}/amount', 'OrderItemAmountController@update');
Route::post('/item/{orderItem}/quantity', 'OrderItemQuantityController@update');

Route::post('/order', 'OrderController@store');
Route::get('/order/{order}', 'OrderController@show');
Route::post('/order/{order}/items', 'OrderItemController@store');
Route::put('/order/{order}/confirm-payment', 'OrderPaymentController@update');
Route::put('/order/{order}/picking', 'OrderPickingController@update');
Route::put('/order/{order}/bags', 'OrderBagController@update');
Route::delete('/order/{order}/bags', 'OrderBagController@destroy');
Route::put('/order/{order}/order', 'OrderSortingController@update');
Route::delete('/order/{order}/order', 'OrderSortingController@destroy');
Route::post('/order/{order}/charge', 'OrderPaymentController@store');
Route::post('/order/{order}/group', 'OrderGroupController@update');
Route::put('/order/{order}/delivered', 'OrderDeliveredController@update');
Route::delete('/order/{order}/delivered', 'OrderDeliveredController@destroy');

Route::get('/orders/group/{group}', 'OrderGroupController@show');
Route::put('/orders/group/{group}/delivered', 'OrderGroupDeliveredController@store');
Route::get('/orders/{group}/{page?}', 'OrderGroupController@index');
