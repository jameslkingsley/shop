<?php

namespace App\Http\Controllers;

use App\Group;
use App\Repositories\CategoryRepository;

class CategoryController extends Controller
{
    public function index(CategoryRepository $category, int $groupId)
    {
        return response()->json([
            'group' => Group::findOrFail($groupId),
            'categories' => $category->all($groupId),
        ]);
    }
}
