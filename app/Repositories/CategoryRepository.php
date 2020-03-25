<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Cache;

class CategoryRepository extends Repository
{
    public function all(int $groupId)
    {
        // return Cache::remember('categories:' . $groupId, 600, function () use ($groupId) {
            return DB::connection('sle')->select('
                SELECT pcatID as id, pcatTitle as title
                FROM tblproductcats
                WHERE pcatGroup = ' . $groupId . '
                ORDER BY pcatTitle
            ');
        // });
    }
}
