<?php
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

$id = $_POST['id'];
$address = $_POST['address'];
$status = $_POST['status'];
$delivere = $_POST['delivere'];
$name = $_POST['name'];

if ($name == 'pending') {
    $sql = "INSERT INTO $name (id, penaddress, penstatus, delivere ) VALUES ('$id', '$address', '$status' , '$delivere')";
} else {
    $sql = "INSERT INTO $name (id, scanaddress, scanstatus, delivere ) VALUES ('$id', '$address', '$status' , '$delivere')";
}
$result = $conn->query($sql);


$conn->close();
