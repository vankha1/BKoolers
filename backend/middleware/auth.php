<?php

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Auth
{
    final public static function authRole($roles)
    {
        $headers = apache_request_headers();
        if (array_key_exists('Authorization', $headers)) {
            $token = str_replace('Bearer ', '', $headers['Authorization']);
            $key = $_SERVER['SECRET_KEY'];

            try {
                $decoded = (array) JWT::decode($token, new Key($key, 'HS256'));
            } catch (Exception $e){
                throw new UnauthenticatedError('Invalid token');
            }

            if(in_array($decoded['role'], $roles)){
                $_SESSION['user_id'] = $decoded['id'];
                $_SESSION['username'] = $decoded['username'];
                $_SESSION['role'] = $decoded['role'];
                return;
            }
            throw new UnauthenticatedError('Unauthorized');
        }
        else {
            throw new UnauthenticatedError('Not Login!!!');
        }
    }
}
