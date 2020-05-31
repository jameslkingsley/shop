<?php

namespace App;

use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $primaryKey = 'prodID';
    protected $table = 'tblproducts';
    public $timestamps = false;
    protected $guarded = [];

    public static function sourceItemPrices(Collection $items)
    {
        $itemIds = $items->implode('id', ',');

        $results = DB::select("
            SELECT prodID AS id, CAST((prodOurPrice * 100) AS SIGNED) AS price
            FROM tblProducts
            WHERE prodID IN ({$itemIds})
        ");

        return collect($results)
            ->mapWithKeys(fn ($item) => [$item->id => $item->price]);
    }
}
