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
Route::livewire('orders/{order}', 'order')->name('order');
Route::delete('orders/{order}', [OrderController::class, 'destroy'])->name('order.delete');

Route::group(['layout' => 'layouts.settings', 'section' => 'body'], function () {
    Route::livewire('settings', 'settings.cards')->name('settings');
    Route::livewire('settings/cards', 'settings.cards')->name('settings.cards');
    Route::livewire('settings/addresses', 'settings.cards')->name('settings.addresses');
});

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('group/{group}', [HomeController::class, 'group']);
Route::get('group/{group}/{category}', [HomeController::class, 'category']);

Route::group(['prefix' => 'admin'], function () {
    Route::view('', 'admin.index');
    Route::livewire('orders/pending/{order?}', 'admin.category')->name('admin.pending')->layout('admin.index');
    Route::livewire('orders/picking/{order?}', 'admin.category')->name('admin.picking')->layout('admin.index');
    Route::livewire('orders/out/{order?}', 'admin.category')->name('admin.out')->layout('admin.index');
    Route::livewire('orders/delivered/{order?}', 'admin.category')->name('admin.delivered')->layout('admin.index');
    Route::view('settings', 'admin.index')->name('admin.settings');
});
