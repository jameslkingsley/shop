<?php

namespace App\Http\Controllers;

use App\Group;
use App\Category;
use App\Repositories\GroupRepository;
use App\Repositories\ProductRepository;
use App\Repositories\CategoryRepository;

class HomeController extends Controller
{
    public function index(GroupRepository $groupRepository)
    {
        return view('home', [
            'groups' => $groupRepository->all(),
        ]);
    }

    public function group(Group $group, CategoryRepository $categoryRepository)
    {
        return view('group', [
            'group' => $group,
            'categories' => $categoryRepository->all($group->getKey()),
        ]);
    }

    public function category(Group $group, Category $category, ProductRepository $productRepository)
    {
        return view('category', [
            'group' => $group,
            'category' => $category,
            'products' => $productRepository->all($category->getKey()),
        ]);
    }
}
