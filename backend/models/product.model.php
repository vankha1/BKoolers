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
            $query = "SELECT * FROM products";
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
            $query = '';
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
            //code...
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new FileNotFoundError($e);
        }
    }
}