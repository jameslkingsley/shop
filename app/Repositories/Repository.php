<?php

namespace App\Repositories;

use Illuminate\Support\Facades\DB;

abstract class Repository
{
    public function table(string $name)
    {
        return DB::connection('sle')->table($name);
    }
}
