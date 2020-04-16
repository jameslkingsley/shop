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

Route::post('/order', 'OrderController@store');
Route::put('/order/{order}/picking', 'OrderPickingController@update');

Route::get('/orders/{group}/{page?}', 'OrderGroupController@index');
