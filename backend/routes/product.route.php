<?php

include_once(dirname(__FILE__) . '/../controllers/product.controller.php');

$url_components = parse_url($_SERVER['REQUEST_URI']);
$url = array_filter(explode('/', $url_components['path']));
$params = '';
if (count($url_components) > 1)
    parse_str($url_components['query'], $params);

$method = $_SERVER['REQUEST_METHOD'];

// if we have url: /web-assignment/backend/products/all?name=product1&price=1000:
// url_components: { "path": "/web-assignment/backend/products/all", "query": "name=product1&price=1000" }
// url: { "1": "web-assignment", "2": "backend", "3": "products", "4": "all" }
// params: {"name": "product1", "price": "1000" }

session_start();

if (array_key_exists('4', $url)) {
    // GET: web-assignment/backend/products/all
    if ($url['4'] == 'all' and $method == 'GET') {
        echo ProductController::getAllProducts();
        // echo json_encode($params);
        http_response_code(200);
    }
    // GET: web-assignment/backend/products/detail?id=
    elseif ($url['4'] == 'detail' and $method == 'GET') {
        try {
            echo ProductController::getProduct($params['id']);
            http_response_code(200);
        } catch (CustomError $e) {
            echo json_encode(['msg' => $e->getMessage()]);
            http_response_code($e->getStatusCode());
        }
    }
    // PUT: web-assignment/backend/products/add
    elseif ($url['4'] == 'add' and $method == 'PUT') {
        try {
            $data = (array) json_decode(file_get_contents('php://input'));
            echo ProductController::addProduct($data);
            http_response_code(200);
        } catch (CustomError $e) {
            echo json_encode(['msg' => $e->getMessage()]);
            http_response_code($e->getStatusCode());
        }
    }
    // PUT: web-assignment/backend/products/update
    elseif ($url['4'] == 'update' and $method == 'PUT') {
        try {
            $data = (array) json_decode(file_get_contents('php://input'));
            echo ProductController::updateProduct($data);
            http_response_code(200);
        } catch (CustomError $e) {
            echo json_encode(['msg' => $e->getMessage()]);
            http_response_code($e->getStatusCode());
        }
    }
    // DELETE: web-assignment/backend/products/delete
    elseif ($url['4'] == 'delete' and $method == 'DELETE') {
        try {
            $data = (array) json_decode(file_get_contents('php://input'));
            echo ProductController::deleteProduct($data);
            http_response_code(200);
        } catch (CustomError $e) {
            echo json_encode(['msg' => $e->getMessage()]);
            http_response_code($e->getStatusCode());
        }
    }
}
