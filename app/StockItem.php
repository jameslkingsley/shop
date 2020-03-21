<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StockItem extends Model
{
    protected $connection= 'sle';
    protected $primaryKey = 'siID';
    protected $table = 'tblstockitem';
}
