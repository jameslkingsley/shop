<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $connection= 'sle';
    protected $primaryKey = 'prodID';
    protected $table = 'tblproducts';

    protected $guarded = [];
}
