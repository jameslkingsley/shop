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
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->foreignId('card_id')->constrained()->cascadeOnDelete();
            $table->foreignId('address_id')->nullable()->constrained()->cascadeOnDelete();
            $table->string('group', 50)->nullable()->index();
            $table->integer('bags')->default(1);
            $table->integer('position')->default(1)->index();
            $table->longText('comment')->nullable();
            $table->boolean('collection')->nullable()->index();
            $table->boolean('substitutions')->nullable();
            $table->date('delivery_date')->index();
            $table->string('status')->default('pending');
            $table->timestamp('picking_at')->nullable()->index();
            $table->timestamp('charged_at')->nullable()->index();
            $table->timestamp('delivered_at')->nullable()->index();
            $table->timestamp('cancelled_at')->nullable()->index();
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
