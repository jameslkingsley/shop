<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    protected $primaryKey = 'pgID';
    protected $table = 'tblproductgroups';
    public $timestamps = false;
    protected $guarded = [];
}
