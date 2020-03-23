<?php

namespace App\Http\Controllers;

use App\Repositories\GroupRepository;
use App\Repositories\ProductRepository;

class GroupController extends Controller
{
    public function index(GroupRepository $group)
    {
        return $group->all();
    }

    public function products(ProductRepository $product, int $groupId)
    {
        return $product->inGroup($groupId);
    }
}
