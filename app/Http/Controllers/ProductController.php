<?php

namespace App\Http\Controllers;

use App\Group;
use App\Category;
use App\Repositories\ProductRepository;

class ProductController extends Controller
{
    public function index(ProductRepository $product, int $groupId, int $categoryId)
    {
        return response()->json([
            'group' => Group::findOrFail($groupId),
            'category' => Category::findOrFail($categoryId),
            'products' => $product->all($categoryId),
        ]);
    }
}
