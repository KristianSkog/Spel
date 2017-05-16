<?php
error_reporting(0);

$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "leaderBoard";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

$sql = "SELECT * FROM leaderBoard ORDER BY boardTime ASC LIMIT 10";

$result = mysqli_query($conn,$sql)or die(mysqli_error());

echo "<table style='width:100%'>";
echo "<tr><th>Place:</th><th>Name:</th><th>Time:</th><th>Mistakes:</th></tr>";

while($row = mysqli_fetch_array($result)) {
    $id += 1;
    $Name = $row['name'];
    $Time = $row['boardTime'];
    $Time = date("i:s", $Time);
    $Mistakes = $row['mistakes'];
    echo "<tr><td style='width: 10%; text-align:center;'>".$id."</td><td style='width:29%; text-align: center;'>".$Name."</td><td style='width:29%; text-align: center;'>".$Time."</td><td style='width:29%; text-align: center;'>".$Mistakes."</td></tr>";
} 

echo "</table>";
mysqli_close($conn);

?>