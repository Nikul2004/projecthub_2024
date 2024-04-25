<?php
 $name = $_POST['name'];
 $email = $_POST['email'];
 $phone = $_POST['phone'];
 $address = $_POST['address'];
 $food = $_POST['food'];
 $quantity = $_POST['quantity'];
 
 // Connect to database
 $conn = mysqli_connect("localhost", "root", "", "cake");


$name = mysqli_real_escape_string($conn, $_POST['name']);
$email = mysqli_real_escape_string($conn, $_POST['email']);
$phone = mysqli_real_escape_string($conn, $_POST['phone']);
// $address = mysqli_real_escape_string($conn, $_POST['address']);
// $food = mysqli_real_escape_string($conn, $_POST['food']);
// $quantity = mysqli_real_escape_string($conn, $_POST['quantity']);

 // Check connection
 if (!$conn) {
     die("Connection failed: " . mysqli_connect_error());
 }

 // Insert order data into database
 $sql = "INSERT INTO orders (name, email, phone, address, food, quantity)
   VALUES ('$name', '$email', '$phone', '$address', '$food','$quantity')";

 if (mysqli_query($conn, $sql)) {
    //  echo "Order submitted successfully";
    header("Location: index.html");
    exit;
 } else {
     echo "Error: " . $sql . "<br>" . mysqli_error($conn);
 }

 mysqli_close($conn);
?>

