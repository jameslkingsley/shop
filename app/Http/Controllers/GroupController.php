<?php

namespace App\Http\Controllers;

use App\Repositories\GroupRepository;

class GroupController extends Controller
{
    public function index(GroupRepository $group)
    {
        return $group->all();
    }
}
