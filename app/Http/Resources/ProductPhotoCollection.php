<?php

namespace CodeShopping\Http\Resources;

use CodeShopping\Models\Product;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductPhotoCollection extends ResourceCollection
{


    private $product;

    /**
     * ProductPhotoCollection constructor.
     * @param Product $product
     */
    public function __construct($resource, Product $product)
    {
       $this->product = $product;
       parent::__construct($resource);
    }


    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'procuct' => new ProductResource($this->product),
            'photos' => $this->collection->map(function ($photo) {
                return new ProductPhotoResource($photo, true);
            })
        ];
    }
}
