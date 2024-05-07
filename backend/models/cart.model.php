<?php
include_once(dirname(__FILE__) . '/../config/db.php');
include_once(dirname(__FILE__) . '/../middleware/error.php');


class Cart
{
    private $conn;

    public function __construct()
    {
        $db = new db();
        $this->conn = $db->connect();
    }
    public function addToCart($data)
    { // id of customer
        try {
            $CUS = $data['customer_id'];
            $PRODUCT = $data['product_id'];
            $SIZE = $data['size'];
            $COLOR = $data['color'];
            $QUANTITY = $data['number'];
            $query = "SELECT * FROM Cart WHERE customer_id = '$CUS' AND product_id ='$PRODUCT' AND size ='$SIZE'  AND color ='$COLOR'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            if (count($result) > 0) {
                $query = "UPDATE Cart SET `number` = `number` +'$QUANTITY' WHERE customer_id ='$CUS' AND product_id ='$PRODUCT' AND size = '$SIZE' AND color = '$COLOR'";
                $stmt = $this->conn->prepare($query);
                $stmt->execute();
            } else {
                $query = "INSERT INTO Cart (product_id, size, color, customer_id, `number`) VALUES ('$PRODUCT','$SIZE','$COLOR','$CUS','$QUANTITY')";
                $stmt = $this->conn->prepare($query);
                $stmt->execute();
            }
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function calculate($id)
    {
        try {
            $query = "SELECT customer_id, SUM(C.number) as total_quantity, SUM(C.number * (P.price * (1 - P.discount))) AS total_cost
            FROM Cart AS C JOIN Product AS P ON product_id = id AND C.size = P.size WHERE customer_id = '$id'
            GROUP BY customer_id;";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new InternalServerError('Server Error!');
        }
    }

    public function getDetail($id)
    {
        try {
            $query = "SELECT * FROM Cart AS C JOIN Product AS P ON C.product_id = P.id AND C.size = P.size WHERE customer_id = '$id';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function deleteItemFromCart($data)
    {
        try {
            $ID = $data['product_id'];
            $SIZE = $data['size'];
            $COLOR = $data['color'];
            $CUS = $data['customer_id'];
            $query = "DELETE FROM Cart WHERE SIZE='$SIZE' AND color = '$COLOR' AND product_id = '$ID' AND customer_id = '$CUS';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function edit($data)
    {
        try {
            $PRODUCT = $data['product_id'];
            $SIZE = $data['size'];
            $COLOR = $data['color'];
            $CUS = $data['customer_id'];
            $QUANTITY = $data['quantity'];
            $query = "UPDATE Cart SET number = '$QUANTITY' WHERE SIZE='$SIZE' AND color = '$COLOR' AND product_id ='$PRODUCT' AND customer_id='$CUS';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }
}
