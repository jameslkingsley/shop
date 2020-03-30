<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;

class CategoryRepository extends Repository
{
    public function all(int $groupId)
    {
        return DB::connection('sle')->select('
            SELECT pcatID as id, pcatTitle as title
            FROM tblproductcats
            WHERE pcatGroup = ' . $groupId . '
            AND pcatType = "product"
            ORDER BY pcatTitle
        ');
    }
}
