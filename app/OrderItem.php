<?php

namespace App;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Model;

class OrderItem extends Model
{
    /**
     * The attributes that are guarded.
     *
     * @var array
     */
    protected $guarded = [];

    protected $appends = [
        'total',
        'product',
    ];

    public function order()
    {
        return $this->belongsTo(Order::class);
    }

    public function getProductAttribute()
    {
        return DB::connection('sle')->select('
            SELECT prodID AS id, prodTitle AS title, siUnitSize AS unit_size, CAST((siOurPrice * 100) AS SIGNED) AS price
            FROM tblProducts
            LEFT JOIN tblStockItem ON prodID = siProduct
            WHERE prodID = ' . $this->product_id . '
            AND tblStockItem.siID = (
                SELECT MAX(siID)
                FROM tblStockItem
                WHERE prodID = siProduct
                AND siStatus = "closed"
            )
        ')[0];
    }

    public function getTotalAttribute()
    {
        return $this->amount * $this->quantity;
    }
}
