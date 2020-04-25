<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $connection = 'sle';
    protected $primaryKey = 'pgID';
    protected $table = 'tblproductgroups';
    public $timestamps = false;
    protected $guarded = [];
}
