<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class GroupRepository extends Repository
{
    public function all()
    {
        return Cache::remember('groups', 600, function () {
            return DB::connection('sle')->select('
                SELECT pgID as id, pgTitle as title
                FROM tblproductgroups
                LEFT JOIN tblproductcats ON pcatGroup = pgID
                LEFT JOIN tblproducts ON prodCatID = pcatID
                LEFT JOIN tblStockItem ON prodID = siProduct
                WHERE tblStockItem.siID = (
                    SELECT MAX(siID)
                    FROM tblStockItem
                    WHERE prodID = siProduct
                    AND siStatus = "closed"
                )
                AND pcatID IS NOT NULL
                AND prodID IS NOT NULL
                AND siID IS NOT NULL
                AND DATE(siBookedIn) > "2018-10-28"
                GROUP BY pgID
                ORDER BY pgTitle
            ');
        });
    }
}
