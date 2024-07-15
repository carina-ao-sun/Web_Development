<?php
ini_set('display_errors', true);
ini_set('display_startup_errors', true);
error_reporting(E_ALL);
?>

<HTML>
<head>
<title>Your Story</title>
<link rel="stylesheet" type="text/css" href="../asg4/holidayCalendar.css">
</head>
<body>

<h1> Here is your Story </h1>

<?php

$a1 = $_GET['a1'];
$a2 = $_GET['a2'];
$n1 = $_GET['n1'];
$n2 = $_GET['n2'];
$n3 = $_GET['n3'];
$v1 = $_GET['v1'];
$v2 = $_GET['v2'];
$number= $_GET['number'];


print ("The $a1 $n1 $v1 the $a2 cave. There $n1 saw a $n2 $v2 $number $n3.");
?>


</body>
</html>
