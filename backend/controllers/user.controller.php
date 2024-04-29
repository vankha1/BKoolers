<?php

include_once(dirname(__FILE__) . '/../models/user.model.php');
include_once(dirname(__FILE__) . '/../middleware/error.php');

use Firebase\JWT\JWT;

class UserController
{
    public static function getAllUsers()
    {
        $temp = new User();
        $users = $temp->getAllUsers();
        if (count($users) > 0) {
            $users = json_encode($users);
            return $users;
        }
        throw new FileNotFoundError("No user found!!!");
    }

    public static function login($info)
    {
        $temp = new User();
        $user = $temp->getUser($info['username']);

        if (count($user) == 1) {
            if ($user[0]['password'] == $info['password']) {
                $key = strval($_SERVER['SECRET_KEY']);

                $getDate = new DateTimeImmutable();
                $user['created_time'] = $getDate->modify('+1 hour')->getTimestamp();
                $jwt = JWT::encode($user, $key, 'HS256'); // This matches the decode in middleware/auth.php
                return json_encode(["data" => [
                    'type' => 'user',
                    'id' => $user[0]['customer_id'],
                    'FName' => $user[0]['FName'],
                    'LName' => $user[0]['LName'],
                    'address' => $user[0]['address'],
                    'email' => $user[0]['email'],
                    'phone' => $user[0]['phone'],
                    'token' => $jwt
                ]]);
            }
            throw new FileNotFoundError("Incorrect password!!!");
        }

        $user = $temp->getUserAdmin($info['username']);
        if (count($user) == 1) {
            if ($user[0]['password'] == $info['password']) {
                $key = $_SERVER['SECRET_KEY'];
                unset($user[0]['password']);

                $getDate = new DateTimeImmutable();
                $user['created_time'] = $getDate->modify('+1 hour')->getTimestamp();
                $jwt = JWT::encode($user, $key, 'HS256');

                return json_encode(["data" => [
                    'type' => 'admin',
                    'id' => $user[0]['id'],
                    'FName' => $user[0]['FName'],
                    'LName' => $user[0]['LName'],
                    'token' => $jwt
                ]]);
            }
            throw new FileNotFoundError("Incorrect password!!!");
        }
        throw new BadRequestError('Invalid username or password');
    }

    public static function signup($info)
    {
        $temp = new User();
        $user = $temp->getUser($info['username']);

        if (count($user) == 0) {
            $newUser = $temp->createUser($info['FName'], $info['LName'], $info['phone'], $info['email'], $info['birthday'], $info['username'], $info['password'], $info['address'], $info['avatar']);
            if ($newUser) {
                http_response_code(200);
                return json_encode(["msg" => "success"]);
            } else {
                return json_encode(["msg" => "failure"]);
            }
            throw new FileNotFoundError("User not created!!!");
        } else {
            return json_encode(["msg" => "failure"]);
        }
        throw new FileNotFoundError("Username exist!!!");
    }
}
