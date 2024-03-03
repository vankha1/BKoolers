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
    // // PUT: web-assignment/backend/products/add
    // else if ($url['4'] == 'add' and $method == 'PUT') {
    //     $data = (array) json_decode(file_get_contents('php://input'));
    //     echo ProductController::addProduct($data);
    //     http_response_code(200);
    // }
    // // PUT: web-assignment/backend/products/update
    // else if ($url['4'] == 'update' and $method == 'PUT') {
    //     $data = (array) json_decode(file_get_contents('php://input'));
    //     echo ProductController::updateProduct($data);
    //     http_response_code(200);
    // }
    // DELETE: web-assignment/backend/products/delete
    else if ($url['4'] == 'delete' and $method == 'DELETE') {
        $data = (array) json_decode(file_get_contents('php://input'));
        echo ProductController::deleteProduct($data);
        http_response_code(200);
    }
}