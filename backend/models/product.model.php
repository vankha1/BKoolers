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
            $query = "SELECT distinct(id), name, price, discount, image FROM Product;";
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
            $query = "SELECT id, name, description, price, discount , image, GROUP_CONCAT(DISTINCT size) AS size, GROUP_CONCAT(DISTINCT COLOR SEPARATOR '/') AS color
            FROM Product WHERE id = '$id' GROUP BY id, name, description, price, discount, image;";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new InternalServerError('Server Error !');
        }
    }

    public function deleteProduct($data){
        try {
            $ID = $data['id'];
            $query = "DELETE FROM PRODUCT WHERE id = '$ID';";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new InternalServerError('Server Error !');
        }
    }

    public function addProduct($data){
        try {
            $ID = $data['id'];
            $CAT = $data['cat'];
            $NAME = $data['name'];
            // $sizes = (array) $data['size'];
            $size = $data['size'];
            $DESCRIPTION = $data['description'];
            $QUANTITY = $data['quantity'];
            $PRICE = $data['price'];
            $DISCOUNT = $data['discount'];
            $IMAGE = $data['image'];
            // $colors = (array) $data['color'];
            $color = $data['color'];
            // if (($key = array_search("", $colors)) !== false) {
            //     unset($colors[$key]);
            // }
            // foreach ($sizes as $size) {
            //     foreach ($colors as $x => $val) {
            $query = "INSERT INTO Product VALUES ('$ID','$CAT','$NAME','$size', '$color','$DESCRIPTION', '$QUANTITY' , '$PRICE', '$DISCOUNT','$IMAGE')";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            //     }
            // }
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new InternalServerError('Server Error !');
        }
    }

    public function getInfo($id)
    {
        try {
            $query = "SELECT id, GROUP_CONCAT(distinct(SIZE)) AS size FROM Product WHERE id = '$id'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function getDetail($id)
    {
        try {
            $query = "SELECT DISTINCT(id), product.NAME, description, discount, price, image, category.NAME AS CATEGORY
            FROM Product JOIN Category ON cat_id = category.cat_id WHERE id = '$id'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function getQuantityBySizeAndId($size, $id)
    {
        try {
            $query = "SELECT quantity FROM Product WHERE id = '$id' AND SIZE='$size'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }

    public function filterCategories($cat)
    {
        try {
            $query = "SELECT distinct(id), name, price, discount, image FROM Product
            WHERE cat_id = '$cat';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }

    public function filterSize($value)
    {
        try {
            $query = "SELECT distinct(id), name, price, discount, image FROM Product WHERE `size` = '$value';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }

    public function getAllCategories()
    {
        try {
            $query = "SELECT cat_id, name from Category";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function getQuantityById($id)
    {
        try {
            $query = "SELECT quantity FROM Product WHERE id = '$id'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function restock($data)
    {
        try {
            $QUANITY = $data['quantity'];
            $ID = $data['id'];
            $SIZE = $data['size'];
            $query = "UPDATE Product SET quantity = '$QUANITY' WHERE id = '$ID' and size = '$SIZE'";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function updateProduct($data)
    {
        try {
            $ID = $data['id'];
            $CAT = $data['cat'];
            $NAME = $data['name'];
            $SIZE = $data['size'];
            $COLOR = $data['color'];
            $DESCRIPTION = $data['description'];
            $QUANTITY = $data['quantity'];
            $PRICE = $data['price'];
            $DISCOUNT = $data['discount'];
            $IMAGE = $data['image'];
            $query = "UPDATE Product SET cat_id = '$CAT', name = '$NAME', size = '$SIZE', color = '$COLOR', description = '$DESCRIPTION', quantity = '$QUANTITY', discount = '$DISCOUNT', price ='$PRICE',
            image = '$IMAGE' WHERE id = '$ID'";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }
}