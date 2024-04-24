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

    public static function addProduct($data){
        $temp = new Product();
        $temp->addProduct($data);
    }

    public static function updateProduct($data){
        $temp = new Product();
        $newProduct = $temp->updateProduct($data);
        if ($newProduct) {
            return json_encode(["msg" => "Update success"]);
        }
        else{
            return json_encode(["msg" => "Update failed"]);
        }
    }

    public static function deleteProduct($id)
    {
        $temp = new Product();
        $res = $temp->deleteProduct($id);
        if ($res){
            return json_encode(["msg" => "Delete success"]);
        }
        else{
            return json_encode(["msg" => "Delete failed"]);
        }
    }
    
    public static function restock($data)
    {
        $temp = new Product();
        $res = $temp->restock($data);
        if ($res){
            return json_encode(["msg" => "Restock success"]);
        }
        else{
            return json_encode(["msg" => "Restock failed"]);
        }
    }
    public static function restockProduct($data)
    {
        $temp = new Product();
        $temp->restock($data);
    }
    public static function getQuantity($id){
        $temp = new Product();
        $quantity = $temp->getQuantityById($id);
        if (count($quantity) > 0) {
            $quantity = json_encode($quantity);
            return $quantity;
        }
        throw new FileNotFoundError("No product found!!!");
    }
    public static function getAllCategories(){
        $temp = new Product();
        $catlist = $temp->getAllCategories();
        if (count($catlist) > 0) {
            $catlist = json_encode($catlist);
            return $catlist;
        }
        throw new FileNotFoundError("No product found!!!");
    }
    public static function filterCategories($id){
        $temp = new Product();
        $products = $temp->filterCategories($id);
        if (count($products) > 0) {
            $products = json_encode($products);
            return $products;
        }
        throw new FileNotFoundError("No product found!!!");
    }
    public static function filterSize($value){
        $temp = new Product();
        $products = $temp->filterSize($value);
        if (count($products) > 0) {
            $products = json_encode($products);
            return $products;
        }
        throw new FileNotFoundError("No product found!!!");
    }
}