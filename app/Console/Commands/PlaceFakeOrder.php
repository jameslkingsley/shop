<?php

namespace App\Console\Commands;

use App\Order;
use App\Events\OrderPlaced;
use Illuminate\Console\Command;

class PlaceFakeOrder extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fake:order';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Place a fake order for testing purposes.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $existing = Order::first();

        $order = Order::create([
            'metadata' => $existing->metadata,
            'customer_id' => $existing->customer_id,
            'payment_method_id' => $existing->payment_method_id,
        ]);

        event(new OrderPlaced($order));
    }
}
