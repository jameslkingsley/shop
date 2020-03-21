<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $connection= 'sle';
    protected $primaryKey = 'prodID';
    protected $table = 'tblproducts';

    /**
     * The attributes that are guarded.
     *
     * @var array
     */
    protected $guarded = [];

    protected $appends = [
    ];
}
