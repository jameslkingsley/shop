<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class ProductRepository extends Repository
{
    public function all(int $categoryId)
    {
        return Cache::remember('products:' . $categoryId, 300, function () use ($categoryId) {
            return DB::connection('sle')->select('
                SELECT prodID AS id, prodTitle AS title, siUnitSize AS unit_size, CAST((siOurPrice * 100) AS SIGNED) AS price
                FROM tblProducts
                LEFT JOIN tblStockItem ON prodID = siProduct
                AND tblStockItem.siID = (
                    SELECT MAX(siID)
                    FROM tblStockItem
                    WHERE prodID = siProduct
                    AND siStatus = "closed"
                )
                INNER JOIN tblProductCats ON pcatID = prodCatID
                INNER JOIN tblProductGroups ON pcatGroup = pgID
                WHERE pgType != "epos"
                AND prodStatus = "active"
                AND prodCatID = ' . $categoryId . '
                AND siID IS NOT NULL
                AND DATE(siBookedIn) > "2018-10-28"
                ORDER BY pgTitle, pcatTitle, prodTitle, siUnitSize, prodID
            ');
        });
    }
}
