<?php

namespace App\Console\Commands;

use DOMDocument;
use App\Product;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;

class FetchBookerImages extends Command
{
    protected const BOOKER_URL = 'https://www.booker.co.uk';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'fetch-booker-images';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Fetch the product images from Booker.';

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
        $products = DB::connection('sle')
            ->table('tblProducts')
            ->select(['prodID', 'prodRef', 'prodTitle', 'prodImg'])
            ->where('prodRef', '!=', '')
            ->whereRaw('length(prodRef) >= 5')
            ->whereNull('prodImg')
            ->get();

        $this->info('Fetching ' . $products->count() . ' images...');

        $bar = $this->output->createProgressBar($products->count());
        $bar->start();

        foreach ($products as $product) {
            if (Storage::exists($path = "images/{$product->prodRef}.jpg") && ! $product->prodImg) {
                Product::findOrFail($product->prodID)
                    ->update(['prodImg' => Storage::url($path)]);

                $bar->advance();

                continue;
            }

            $response = Http::withHeaders([
                'User-Agent' => request()->userAgent(),
                'Accept-Encoding' => 'deflate;q=0',
                'TE' => 'deflate;q=0',
                'mimetype' => 'text/html',
            ])->get(static::BOOKER_URL . '/catalog/displayimage.aspx?vid=' . $product->prodRef);

            $document = new DOMDocument;
            $document->loadHTML($response->body());

            if ($image = $document->getElementById('imgImage')) {
                $imageUrl = static::BOOKER_URL . $image->getAttribute('src');

                if (! Storage::exists($path = "images/{$product->prodRef}.jpg")) {
                    Storage::put($path, fopen($imageUrl, 'r'));
                }

                Product::findOrFail($product->prodID)
                    ->update([
                        'prodImg' => Storage::url($path),
                        'prodDesc' => $image->getAttribute('alt') ?: null,
                    ]);
            }

            $bar->advance();
        }

        $bar->finish();
    }
}
