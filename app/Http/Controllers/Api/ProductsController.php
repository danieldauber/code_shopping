<?php

namespace CodeShopping\Http\Controllers\Api;

use CodeShopping\Http\Controllers\Controller;
use CodeShopping\Http\Requests\ProductRequest;
use CodeShopping\Models\Products;

class ProductsController extends Controller
{

    public function index()
    {
        return Products::all();
    }

    public function store(ProductRequest $request)
    {
        $products = Products::create($request->all());
        $products->refresh();

        return $products;
    }

    public function show($id)
    {
        $product = Products::findOrFail($id);

        return $product;
    }

    public function update(ProductRequest $request, Products $products)
    {
        $products->fill($request->all());
        $products->save();

        return $products;
    }

    public function destroy(Products $products)
    {
        $products->delete();

        return response([], 204);
    }
}
