<?php

namespace App\Http\Controllers;

use App\Repositories\ProductRepository;

class ProductController extends Controller
{
    public function index(ProductRepository $product, int $groupId, int $categoryId)
    {
        return $product->all($categoryId);
    }
}
