<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "test_pta";

// Create connection
$conn = new mysqli(
    $servername,
    $username,
    $password,
    $dbname,
);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

$delId = $_POST["id"];
$delName = $_POST["name"];


$sql = "DELETE FROM $delName WHERE id='$delId'";
$result = $conn->query($sql);


$conn->close();

