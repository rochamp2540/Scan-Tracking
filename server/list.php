<?php
header("Access-Control-Allow-Origin: http://localhost:3000");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test_pta";

$conn = new mysqli(
    $servername,
    $username,
    $password,
    $dbname,
);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT * FROM pending";
$result = $conn->query($sql);

$response = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $response[] = $row;
    }
    echo json_encode($response);
} else {
    echo "0 results";
}

$conn->close();