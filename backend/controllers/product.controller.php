<?php

include_once(dirname(__FILE__) . '/../models/product.model.php');
include_once(dirname(__FILE__) . '/../middleware/error.php');

class ProductController {
    public static function getAllProducts(){
        $temp = new Product();
        $products = $temp->getAllProducts();
        if (count($products) > 0) {
            $products = json_encode($products);
            return $products;
        }
        throw new FileNotFoundError("No product found!!!");
    }

    public static function getProduct($id){
        $temp = new Product();
        $product = $temp->getProduct($id);
        if (count($product) > 0) {
            $product = json_encode($product);
            return $product;
        }
        throw new FileNotFoundError("No product found!!!");
    }

    public static function deleteProduct($id)
    {
        $temp = new Product();
        $temp->deleteProduct($id);
    }
}