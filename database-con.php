<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "testdemo";



// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$first_name =  $_REQUEST['f1name']; 
$DOB = $_REQUEST['DOB'];
$age = $_REQUEST['Age']; 
$hosptial =  $_REQUEST['arr']; 
$ammount = $_REQUEST['ammount']; 
$lname1 = $_REQUEST['lname1']; 
$adddate = $_REQUEST['adddate']; 
$disdate = $_REQUEST['disdate']; 
$city = $_REQUEST['city']; 

$sql = "INSERT INTO patient_details   VALUES ('$first_name',  
            '$BOD','$age','$hosptial','$ammount',$lname1','$adddate','$disdate','$city')"; 
   
   if(mysqli_query($conn, $sql)){ 
    echo "<h3>data stored in a database successfully." 
        . " Please browse your localhost php my admin" 
        . " to view the updated data</h3>";  

 
} else{ 
    echo "ERROR: Hush! Sorry $sql. " 
        . mysqli_error($conn); 
} 
  
// Close connection 
mysqli_close($conn); 
?> 


?>
