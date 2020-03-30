<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;

class GroupRepository extends Repository
{
    public function all()
    {
        return DB::connection('sle')->select('
            SELECT pgID as id, pgTitle as title
            FROM tblproductgroups
            WHERE pgType = "sale"
            AND pgID > 30
            ORDER BY pgTitle
        ');
    }
}
