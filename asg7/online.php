<!DOCTYPE HTML>
<HTML>
<head>
<title>Receipt</title>
<link rel="stylesheet" type="text/css" href="../asg4/holidayCalendar.css">
</head>
<body>

<h1> Thank you for shoping at my online store! </h1>

<?php
// process form and get values from the form

$fname = $_POST['name'];
$email = $_POST['email'];
$products = $_POST['products'];
$num = floatval($_POST['number']);



echo nl2br ("Hello, $fname. Welcome to my site!\n");

print("<br>");


if($products=="burger"){
  $sum = $num *10;
}
else{
  $sum = $num *8;
}

print("Your email is $email and you ordered $num $products, and the total is $sum.");


print("<hr>");

foreach($_POST as $name => $value)
{
    print("<li> $name : $value");
}


?>
</body>
</html>
