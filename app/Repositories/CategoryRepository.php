<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;

class CategoryRepository extends Repository
{
    public function all(int $groupId)
    {
        return DB::select('
            SELECT pcatID as id, pcatTitle as title, (
                SELECT prodImg
                FROM tblProducts
                WHERE prodImg IS NOT NULL
                AND prodCatID = pcatID
                AND prodStatus = "active"
                ORDER BY prodLastBought DESC
                LIMIT 1
            ) AS image
            FROM tblproductcats
            WHERE pcatGroup = ' . $groupId . '
            AND pcatType = "product"
            AND pcatShow = 1
            ORDER BY pcatTitle
        ');
    }
}
