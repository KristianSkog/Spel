<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "leaderBoard";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$name = mysqli_escape_string($conn, $_POST["name"]);
$time = mysqli_escape_string($conn, $_POST["time"]);
$mistake = mysqli_escape_string($conn, $_POST["mistakes"]);

$sql = "INSERT INTO leaderBoard (name, boardTime, mistakes)
VALUES ('$name', '$time', '$mistake')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
header('Location: index.php');