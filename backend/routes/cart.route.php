<?php
include_once(dirname(__FILE__) . '/../controllers/cart.controller.php');

$url_components = parse_url($_SERVER['REQUEST_URI']);
$url = array_filter(explode('/', $url_components['path']));

$params = '';
if (count($url_components) > 1)
    parse_str($url_components['query'], $params);

$method = $_SERVER['REQUEST_METHOD'];
session_start();
// POST: /web-assignment/backend/cart/add
if ($url['4'] == 'add' and $method == 'POST') {
    try {
        $data = (array) json_decode(file_get_contents('php://input'));
        echo CartController::addToCart($data);
        http_response_code(200);
    } catch (CustomError $e) {
        echo json_encode(['msg' => $e->getMessage()]);
        http_response_code($e->getStatusCode());
    }
}
// GET: /web-assignment/backend/cart/calculate?id=1
elseif ($url['4'] == 'calculate' and $method == 'GET') {
    try {
        echo CartController::calculate($params['id']);
        http_response_code(200);
    } catch (CustomError $e) {
        echo json_encode(['msg' => $e->getMessage()]);
        http_response_code($e->getStatusCode());
    }
} 
// GET: /web-assignment/backend/cart/detailCart?id=1 
elseif ($url['4'] == 'detailCart' and $method == 'GET') {
    try {
        echo CartController::getDetail($params['id']);
        http_response_code(200);
    } catch (CustomError $e) {
        echo json_encode(['msg' => $e->getMessage()]);
        http_response_code($e->getStatusCode());
    }
} 
// POST: /web-assignment/backend/cart/deleteCart 
elseif ($url['4'] == 'deleteCart' and $method == 'POST') {
    try {
        $data = (array) json_decode(file_get_contents('php://input'));
        echo CartController::deleteItemFromCart($data);
        http_response_code(200);
    } catch (CustomError $e) {
        echo json_encode(['msg' => $e->getMessage()]);
        http_response_code($e->getStatusCode());
    }
} 
// POST: /web-assignment/backend/cart/edit  
elseif ($url['4'] == 'edit' and $method == 'POST') {
    try {
        $data = (array) json_decode(file_get_contents('php://input'));
        echo CartController::edit($data);
        http_response_code(200);
    } catch (CustomError $e) {
        echo json_encode(['msg' => $e->getMessage()]);
        http_response_code($e->getStatusCode());
    }
}
