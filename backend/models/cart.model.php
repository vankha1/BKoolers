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
            $CUS = $data['CustomerID'];
            $CODE = $data['CODE'];
            $COLOR = $data['COLOR'];
            $SIZE = $data['SIZE'];
            $NUM = $data['NUM'];
            $query = "";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC)();
            if (count($result) > 0) {
                $query = "";
                $stmt = $this->conn->prepare($query);
                $stmt->execute();
            } else {
                $query = "";
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
            $query = "";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC)();
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }

    public function getDetail($id)
    {
        try {
            $query = "";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC)();
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function deleteCart($data)
    {
        try {
            $CODE = $data['ProductID'];
            $COLOR = $data['COLOR'];
            $SIZE = $data['SIZE'];
            $CustomerID = $data['CustomerID'];
            $query = "";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }
    public function edit($data)
    {
        try {
            $CODE = $data['ProductID'];
            $COLOR = $data['COLOR'];
            $SIZE = $data['SIZE'];
            $CustomerID = $data['CustomerID'];
            $NUM = $data['NUM'];
            $query = "";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }
}
