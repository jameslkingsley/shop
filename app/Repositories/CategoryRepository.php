<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class CategoryRepository extends Repository
{
    public function all(int $groupId)
    {
        return Cache::remember('categories:' . $groupId, 300, function () use ($groupId) {
            return DB::connection('sle')->select('
                SELECT pcatID as id, pcatTitle as title
                FROM tblproductcats
                LEFT JOIN tblproducts ON prodCatID = pcatID
                LEFT JOIN tblStockItem ON prodID = siProduct
                WHERE tblStockItem.siID = (
                    SELECT MAX(siID)
                    FROM tblStockItem
                    WHERE prodID = siProduct
                    AND siStatus = "closed"
                )
                AND prodID IS NOT NULL
                AND siID IS NOT NULL
                AND DATE(siBookedIn) > "2018-10-28"
                AND pcatGroup = ' . $groupId . '
                GROUP BY pcatID
            ');
        });
    }
}
