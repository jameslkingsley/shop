<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $primaryKey = 'prodID';
    protected $table = 'tblproducts';
    public $timestamps = false;
    protected $guarded = [];
}
