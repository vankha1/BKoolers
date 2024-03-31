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
    public function addCart($data)
    { // id of customer
        try {
            $CUS = $data['customer_id'];
            $PRODUCT = $data['product_id'];
            $SIZE = $data['size'];
            $QUANTITY = $data['quantity'];
            $query = "SELECT * FROM Cart WHERE customer_id = '$CUS' AND product_id ='$PRODUCT' AND size ='$SIZE'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            $result = $stmt->get_result();
            if ($result->num_rows > 0) {
                $query = "UPDATE Cart SET quantity = quantity +'$QUANTITY' WHERE customer_id ='$CUS' AND product_id ='$PRODUCT' AND size = '$SIZE'";
                $stmt = $this->conn->prepare($query);
                $stmt->execute();
            } else {
                $query = "INSERT INTO Cart (product_id, size, customer_id, quantity) VALUES ('$PRODUCT','$SIZE','$CUS','$QUANTITY')";
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
            $query = "SELECT customer_id, SUM(quantity), SUM(quantity * (price * (1 - discount))) AS total_cost
            FROM Cart AS C JOIN Product AS P ON product_id = id AND C.size = P.size WHERE customer_id = '$id'
            GROUP BY customer_id;";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        } catch (mysqli_sql_exception $e) {
            throw new InternalServerError('Server Error!');
        }
    }

    public function getDetail($id)
    {
        try {
            $query = "SELECT * FROM Cart AS C JOIN Product AS P ON C.product_id = P.id AND C.size = P.size WHERE customer_id = '$id';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->get_result();
        } catch (mysqli_sql_exception $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function deleteCart($data)
    {
        try {
            $ID = $data['product_id'];
            $SIZE = $data['size'];
            $CUS = $data['customer_id'];
            $query = "DELETE FROM Cart WHERE SIZE='$SIZE' AND product_id = '$ID' AND customer_id = '$CUS';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
        } catch (mysqli_sql_exception $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function edit($data)
    {
        try {
            $PRODUCT = $data['product_id'];
            $SIZE = $data['size'];
            $CUS = $data['customer_id'];
            $QUANTITY = $data['quantity'];
            $query = "UPDATE Cart SET quantity = '$QUANTITY' WHERE SIZE='$SIZE' AND product_id ='$PRODUCT' AND customer_id='$CUS';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
        } catch (mysqli_sql_exception $e) {
            throw new InternalServerError('Server Error !');
        }
    }
}
