<?php
include_once(dirname(__FILE__) . '/../config/db.php');
include_once(dirname(__FILE__) . '/../middleware/error.php');


class Order
{
    private $conn;

    public function __construct()
    {
        $db = new db();
        $this->conn = $db->connect();
    }
    
    public function getAllOrder($id)
    { // id of customer
        try {
            $query = "SELECT * FROM bk_clothes.order WHERE customer_id ='$id';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }

    public function getOrder($id)
    { // id of 1 order
        try {
            $query = "SELECT O.id, O.customer, P.name , O.total_product, O.total_cost, O.phone, O.address, O.date_created, P.id, D.quantity
            FROM bk_clothes.order as O NATURAL JOIN OrderDetail  AS D JOIN Product AS P ON D.product_id = P.id
            WHERE bk_clothes.order.id ='$id';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }

    public function confirm($id)
    {
        try {
            $query = "UPDATE Order SET status = 1  WHERE order_id ='$id'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            $query = "UPDATE Product AS P, OrderItem AS D SET P.QUANITY = P.QUANITY - D.quantity
            WHERE id = product_id AND P.size = D.size AND order_id = '$id';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }

    public function makeOrder($data)
    {
        try {
            $CUSTOMER = $data['customer_id'];
            $NAME = $data['name'];
            $TOTAL_PRODUCT = $data['total_quantity'];
            $COST = $data['total_price'];
            $PAY = $data['payment_method'];
            $PHONE = $data['phone'];
            $ADD = $data['address'];

            $query = "INSERT INTO Order (customer_id, name, total_quantity, total_cost, payment_method, phone, address) VALUES ('$CUSTOMER','$NAME','$TOTAL_PRODUCT','$COST','$PAY','$PHONE','$ADD');";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();

            $query = "INSERT INTO include (product_id, size, quantity, order_id) SELECT product_id, size, quantity, order_id FROM Cart JOIN (SELECT max(order_id) AS order_id FROM Order) AS TEMP WHERE customer_id ='$CUSTOMER';";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();


            $query = "DELETE FROM Cart WHERE customer_id = '$CUSTOMER'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }

    public function chart()
    { // id of customer
        try {
            $query = "SELECT month(created_at) AS MONTH, sum(total_price) AS TOTAL_COST from bk_clothes.order group by month(created_at);";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function getAll_Admin()
    { // id of 1 order
        try {
            $query = "SELECT * FROM bk_clothes.order;";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }

}