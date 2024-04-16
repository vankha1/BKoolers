<?php

include_once(dirname(__FILE__) . '/../controllers/order.controller.php');
include_once(dirname(__FILE__) . '/../middleware/error.php');

$url_components = parse_url($_SERVER['REQUEST_URI']);
$url = array_filter(explode('/', $url_components['path']));

$params = '';
if (count($url_components) > 1)
    parse_str($url_components['query'], $params);

$method = $_SERVER['REQUEST_METHOD'];

session_start();

if (array_key_exists('4', $url)) {
    // GET: web-assignment/backend/orders/allOrder?CustomerID=
    if ($url['4'] == 'allOrder' and $method == 'GET') {
        try {
            echo OrderController::getAllOrder($params['CustomerID']);
            http_response_code(200);
        } catch (CustomError $e) {
            echo json_encode(['msg' => $e->getMessage()]);
            http_response_code($e->getStatusCode());
        }
    }
    // GET: web-assignment/backend/orders/all
    elseif ($url['4'] == 'all' and $method == 'GET') {
        try {
            echo OrderController::getAllAdmin();
            http_response_code(200);
        } catch (CustomError $e) {
            echo json_encode(['msg' => $e->getMessage()]);
            http_response_code($e->getStatusCode());
        }
    }
    // GET: web-assignment/backend/orders/detail?idOrder= // code of 1 order
    elseif ($url['4'] == 'detail' and $method == 'GET') {
        try {
            echo OrderController::getOrder($params['idOrder']);
            http_response_code(200);
        } catch (CustomError $e) {
            echo json_encode(['msg' => $e->getMessage()]);
            http_response_code($e->getStatusCode());
        }
    }

    // POST: web-assignment/backend/orders/add
    elseif ($url['4'] == 'add' and $method == 'POST') {
        try {
            $data = (array) json_decode(file_get_contents('php://input'));
            echo OrderController::makeOrder($data);
            http_response_code(200);
        } catch (CustomError $e) {
            echo json_encode(['msg' => $e->getMessage()]);
            http_response_code($e->getStatusCode());
        }
    }
    // PUT: web-assignment/backend/orders/confirm?id=
    elseif ($url['4'] == 'confirm' and $method == 'PUT') {
        try {
            // $data = (array) json_decode(file_get_contents('php://input'));
            // echo OrderController::confirm($data['id']);
            // http_response_code(200);
            echo OrderController::confirm($params['id']);
            http_response_code(200);
        } catch (CustomError $e) {
            echo json_encode(['msg' => $e->getMessage()]);
            http_response_code($e->getStatusCode());
        }
    }
}
