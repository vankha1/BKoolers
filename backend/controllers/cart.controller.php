<?php
include_once(dirname(__FILE__) . '/../models/cart.model.php');
include_once(dirname(__FILE__) . '/../middleware/error.php');


class CartController
{
    public static function addCart($data)
    {
        $temp = new Cart();
        $temp->addCart($data);
    }
    public static function calculate($id)
    {
        $temp = new Cart();
        $new = $temp->calculate($id);
        if (count($new) > 0) {
            $rows = json_encode($new);
            return $rows;
        }
    }
    public static function getDetail($id)
    {
        $temp = new Cart();
        $new = $temp->getDetail($id);
        if (count($new) > 0) {
            $rows = json_encode($new);
            return $rows;
        }
        throw new FileNotFoundError("Product not found !");
    }
    public static function deleteCart($data)
    {
        $temp = new Cart();
        $new = $temp->deleteCart($data);
    }
    public static function edit($data)
    {
        $temp = new Cart();
        $new = $temp->edit($data);
    }
}
