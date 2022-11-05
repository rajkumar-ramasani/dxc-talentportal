<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
$path = explode('/', $_SERVER['REQUEST_URI']);
$username = 'testuser1';
//print_r($path);
$method = $path[3];
switch($method) {
    case "demands":
        $sql = "SELECT * FROM demands 
        RIGHT JOIN capability ON demands.capability_id=capability.capability_id";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $demands = [];
        if(isset($path[4])) {
            $sql .= " WHERE demands.owner_id = :id and demands.mapped_status= 'open'";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();
            $demands = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } 

        echo json_encode($demands);
        break;
    case "bench":
        $sql = "SELECT * FROM bench_resources
        RIGHT JOIN capability ON bench_resources.capability_id=capability.capability_id";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        $benchData = [];
        if(isset($path[4])) {
            $sql .= " WHERE status = 'open'";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[4]);
            $stmt->execute();
            $benchData = $stmt->fetchAll(PDO::FETCH_ASSOC);
        } 
        echo json_encode($benchData);
        break;
}