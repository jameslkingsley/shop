<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class GroupRepository extends Repository
{
    public function all()
    {
        // return Cache::remember('groups', 600, function () {
            return DB::connection('sle')->select('
                SELECT pgID as id, pgTitle as title
                FROM tblproductgroups
                ORDER BY pgTitle
            ');
        // });
    }
}
