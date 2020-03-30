<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;

class ProductRepository extends Repository
{
    public function all(int $categoryId)
    {
        return DB::connection('sle')->select('
            SELECT prodID AS id, prodTitle AS title, prodUnitSize AS unit_size, CAST((prodOurPrice * 100) AS SIGNED) AS price
            FROM tblProducts
            WHERE prodStatus = "active"
            AND prodCatID = ' . $categoryId . '
            ORDER BY prodTitle, prodUnitSize, prodID
        ');
    }

    public function inGroup(int $groupId)
    {
        return DB::connection('sle')->select('
            SELECT prodID AS id, prodTitle AS title, prodUnitSize AS unit_size, CAST((prodOurPrice * 100) AS SIGNED) AS price
            FROM tblProducts
            INNER JOIN tblProductCats ON pcatID = prodCatID
            INNER JOIN tblProductGroups ON pcatGroup = pgID
            WHERE pgID = ' . $groupId . '
            AND prodStatus = "active"
            ORDER BY prodTitle, prodUnitSize, prodID
        ');
    }
}
