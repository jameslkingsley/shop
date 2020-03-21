<?php

namespace App\Http\Controllers;

use App\Repositories\CategoryRepository;

class CategoryController extends Controller
{
    public function index(CategoryRepository $category, int $groupId)
    {
        return $category->all($groupId);
    }
}
