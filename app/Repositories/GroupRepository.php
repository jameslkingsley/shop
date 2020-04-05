<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;

class GroupRepository extends Repository
{
    public function all()
    {
        return DB::connection('sle')->select('
            SELECT pgID as id, pgTitle as title, (
                SELECT prodImg
                FROM tblProducts
                WHERE prodImg IS NOT NULL
                AND prodCatID IN (SELECT pcatID
                    FROM tblproductcats
                    WHERE pcatGroup = pgID
                    AND pcatType = "product"
                    AND pcatShow = 1
                )
                AND prodStatus = "active"
                ORDER BY prodLastBought DESC
                LIMIT 1
            ) AS image
            FROM tblproductgroups
            WHERE pgType = "sale"
            AND pgID > 30
            AND pgShow = 1
            ORDER BY pgTitle
        ');
    }
}
