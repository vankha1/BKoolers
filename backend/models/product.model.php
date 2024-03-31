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
            $query = "SELECT distinct(id), NAME, PRICE, discount, image FROM Product;";
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
            $query = "SELECT id, NAME, DESCRIPTION, PRICE, discount , image, GROUP_CONCAT(distinct(SIZE)) AS SIZE
            Product  WHERE id = '$id' GROUP BY id, NAME, DESCRIPTION, price, discount, image;";
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
            $query = "DELETE FROM PRODUCT WHERE id = '$id';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new InternalServerError('Server Error !');
        }
    }

    public function addProduct($data){
        try {
            $ID = $data['id']
            $CAT = $data['cat'];
            $NAME = $data['name'];
            $sizes = (array) $data['size'];
            $DESCRIPTION = $data['description'];
            $QUANTITY = $data['quantity']
            $PRICE = $data['price'];
            $DISCOUNT = $data['discount'];
            $IMAGE = $data['image'];
            foreach ($sizes as $size) {
                $query = "INSERT INTO Product VALUES ('$ID', '$CAT', '$NAME','$size','$DESCRIPTION','$QUANTITY','$PRICE','$DISCOUNT','$IMAGE')";
                $stmt = $this->conn->prepare($query);
                $stmt->execute();
            }
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new InternalServerError('Server Error !');
        }
    }

    public function get_info($id)
    {
        try {
            $query = "SELECT id, GROUP_CONCAT(distinct(SIZE)) AS SIZE FROM Product WHERE id = '$id'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        } catch (mysqli_sql_exception $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function get_detail($id)
    {
        try {
            $query = "SELECT DISTINCT(id), product.NAME, description, discount, price, image, category.NAME AS CATEGORY
            FROM Product JOIN Category ON cat_id = category.cat_id WHERE id = '$id'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        } catch (mysqli_sql_exception $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function get_quanity($idm $size)
    {
        try {
            $query = "SELECT quantity FROM Product WHERE id = '$id' AND SIZE='$size'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        } catch (mysqli_sql_exception $e) {
            throw new InternalServerError('Server Error !');
        }
    }

    public function filter_categories($cat)
    {
        try {
            $query = "SELECT distinct(id), name, price, discount, image FROM Product
            WHERE cat_id = '$cat';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        } catch (mysqli_sql_exception $e) {
            throw new InternalServerError('Server Error !');
        }
    }

    public function filter_size($size)
    {
        try {
            $query = "SELECT distinct(id), name, price, discount, image FROM Product WHERE size = '$size';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        } catch (mysqli_sql_exception $e) {
            throw new InternalServerError('Server Error !');
        }
    }

    public function getAllCategories()
    {
        try {
            $query = "SELECT cat_id, name from Category ";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        } catch (mysqli_sql_exception $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function get_quanity($id)
    {
        try {
            $query = "SELECT quantity FROM Product WHERE id = '$id'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        } catch (mysqli_sql_exception $e) {
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
            $stmt->execute();
        } catch (mysqli_sql_exception $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function edit($data)
    {
        try {
            $ID = $data['id'];
            $CAT = $data['cat'];
            $NAME = $data['name'];
            $SIZE = $data['size'];
            $DESCRIPTION = $data['description'];
            $QUANTITY = $data['quantity'];
            $PRICE = $data['price'];
            $DISCOUNT = $data['discount'];
            $IMAGE = $data['image'];
            $query = "UPDATE Product SET cat_id = '$CAT', name = '$NAME', size = '$SIZE', description = '$DESCRIPTION', quantity = '$QUANTITY', price ='$PRICE',
            , discount = '$DISCOUNT', image = '$IMAGE' WHERE id = '$ID'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
        } catch (mysqli_sql_exception $e) {
            throw new InternalServerError('Server Error !');
        }
    }
}