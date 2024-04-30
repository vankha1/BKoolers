<?php
class User
{
    private $conn;

    public function __construct()
    {
        $db = new db();
        $this->conn = $db->connect();
    }

    public function getAllUsers()
    {
        try {
            $query = "SELECT * FROM Customer";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            throw new InternalServerError('Server Error !');
        }
    }

    public function getUser($username)
    {
        try {
            $query = "SELECT `customer_id`, `FName`, `LName`, `phone`, `email`, `birthday`, `username`, `password`, `address`, `avatar` FROM Customer WHERE username = '$username'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC); // PDO::FETCH_ASSOC to get only the associative array 
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new InternalServerError('Server Error !');
        }
    }

    public function getUserAdmin($username)
    {
        try {
            $query = "SELECT `id`, `FName`, `LName`, `password` FROM `Admin` WHERE username = '$username'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new InternalServerError('Server Error !');
        }
    }

    public function createUser($FName, $LName, $phone, $email, $birthday, $username, $password, $address, $avatar)
    {
        try {
            $query = "INSERT INTO Customer (`FName`, `LName`, `phone`, `email`, `birthday`, `username`, `password`, `address`, `avatar`) VALUES ('$FName', '$LName', '$phone', '$email', '$birthday', '$username', '$password', '$address', '$avatar')";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new InternalServerError('Server Error !');
        }
    }
}
