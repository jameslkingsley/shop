<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\BasketController;
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\DispatchController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\OrderPrintController;

Auth::routes();

Route::get('logout', [LoginController::class, 'logout'])->name('logout');

Route::get('dispatch/{group}', [DispatchController::class, 'index'])->middleware('auth');
Route::get('print/{order}', [OrderPrintController::class, 'show'])->middleware('auth');

Route::get('basket', [BasketController::class, 'index'])->name('basket');
Route::get('checkout', [CheckoutController::class, 'index'])->name('checkout');
Route::get('orders', [OrderController::class, 'index'])->name('orders');
Route::get('orders/{order}', [OrderController::class, 'show'])->name('order');
Route::get('settings', fn () => 'settings')->name('settings');

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('group/{group}', [HomeController::class, 'group']);
Route::get('group/{group}/{category}', [HomeController::class, 'category']);
