<?php

include_once(dirname(__FILE__) . '/../config/db.php');
include_once(dirname(__FILE__) . '/../middleware/error.php');

class Product {
    private $conn;

    public function __construct() {
        $db = new db();
        $this->conn = $db->connect();
    }

    public function getAllProducts() {
        try {
            $query = "SELECT * FROM product";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new InternalServerError('Server Error !');
        }
    }

    public function getProduct($id){
        try {
            $query = "SELECT * FROM product WHERE id = '$id'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new InternalServerError('Server Error !');
        }
    }

    public function deleteProduct($id){
        try {
            $query = '';
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new InternalServerError('Server Error !');
        }
    }

    public function addProduct($data){
        try {
            $NAME = $data['name'];
            $CATEGORY = $data['CATEGORY'];
            $PRICE = $data['PRICE'];
            $SALE = $data['SALE'];
            $MATERIAL = $data['MATERIAL'];

            $DESCRIPTION = $data['DESCRIPTION'];
            $IMG = $data['IMG'];

            // one product has many sizes and colors
            $sizes = (array) $data['SIZE']; 
            $colors = (array) $data['COLOR'];
            // colors = Array($key => $value)
            // $key = array_search("", $colors) : find first key matching $value = "" in $colors and return false if not found
            if (($key = array_search("", $colors)) !== false) {
                unset($colors[$key]); // break the reference to $colors[key]
            }

            foreach ($sizes as $size) {
                foreach ($colors as $x => $val) { // one size has many colors
                    $query = "INSERT INTO product VALUES ('$NAME','$val','$size','$MATERIAL','$DESCRIPTION',0,'$SALE','$PRICE','$IMG[0]','$IMG[1]','$IMG[2]','$IMG[3]','$CATEGORY')";
                    $stmt = $this->conn->prepare($query);
                    $stmt->execute();
                }
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new FileNotFoundError($e);
        }
    }

    public function updateProduct($data){
        try {
            //code...
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new FileNotFoundError($e);
        }
    }
}