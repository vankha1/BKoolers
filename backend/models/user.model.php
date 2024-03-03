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
            $query = "SELECT * FROM person";
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
            $query = "SELECT `id`,`firstname`,`lastname`,`password`,`address`,`email`,`phone` FROM person WHERE username = '$username'";
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
            $query = "SELECT id,firstname,lastname FROM person WHERE username = '$username'";
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new InternalServerError('Server Error !');
        }
    }

    public function createUser($firstname, $lastname, $phone, $email, $birthday, $username, $password, $address)
    {
        try {
            $query = "INSERT INTO person (firstname, lastname, phone, email, birthday, username, password, address) VALUES ('$firstname', '$lastname', '$phone', '$email', '$birthday', '$username', '$password', '$address')";
            $stmt = $this->conn->prepare($query);
            return $stmt->execute();
        } catch (PDOException $e) {
            echo $e->getMessage();
            throw new InternalServerError('Server Error !');
        }
    }
}
