<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;

class ProductRepository extends Repository
{
    public function all(int $categoryId)
    {
        return DB::connection('sle')->select('
            SELECT prodID AS id, prodRef as ref, prodTitle AS title, prodUnitSize AS unit_size, CAST((prodOurPrice * 100) AS SIGNED) AS price
            FROM tblProducts
            WHERE prodStatus = "active"
            AND prodCatID = ' . $categoryId . '
            AND prodLastBought > DATE_ADD(NOW(), INTERVAL -365 DAY)
            AND prodOurPrice != 0
            ORDER BY prodTitle, prodUnitSize, prodID
        ');
    }

    public function inGroup(int $groupId)
    {
        return DB::connection('sle')->select('
            SELECT prodID AS id, prodRef as ref, prodTitle AS title, prodUnitSize AS unit_size, CAST((prodOurPrice * 100) AS SIGNED) AS price
            FROM tblProducts
            INNER JOIN tblProductCats ON pcatID = prodCatID
            INNER JOIN tblProductGroups ON pcatGroup = pgID
            WHERE pgID = ' . $groupId . '
            AND prodStatus = "active"
            AND prodLastBought > DATE_ADD(NOW(), INTERVAL -180 DAY)
            AND prodOurPrice != 0
            ORDER BY prodTitle, prodUnitSize, prodID
        ');
    }
}
