<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: HEAD, GET, POST, PUT, PATCH, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];
if ($method == "OPTIONS") {
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization");
    header("HTTP/1.1 200 OK");
    die();
}

include_once './vendor/autoload.php';
// ini_set('include_path', '.;C:\xampp\php\PEAR');


$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

include_once './config/db.php';
if (isset($_SERVER['REDIRECT_URL'])) {
    $url = array_filter(explode('/', $_SERVER['REDIRECT_URL']));
    // echo json_encode($url); // "1": "web-assignment", "2": "backend", "3": "users", "4": "all"

    if (array_key_exists('3', $url)) {
        if ($url['3'] == 'users'){
            include './routes/user.route.php';
        }
    }
} else {
    http_response_code(404);
    echo json_encode(["message" => 'Not found API!!!']);
}
