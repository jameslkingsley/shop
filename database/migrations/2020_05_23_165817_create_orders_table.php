<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('customer_id')->nullable();
            $table->string('payment_method_id')->nullable();
            $table->json('metadata')->nullable();
            $table->string('group', 50)->nullable();
            $table->integer('bags')->default(1);
            $table->integer('order')->default(1);
            $table->longText('comment')->nullable();
            $table->boolean('collection')->nullable();
            $table->timestamp('picking_at')->nullable();
            $table->timestamp('charged_at')->nullable();
            $table->timestamp('delivered_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
