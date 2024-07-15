<!DOCTYPE HTML>
<HTML>
<head>
<title>Answers</title>
<link rel="stylesheet" type="text/css" href="../asg4/holidayCalendar.css">
</head>
<body>

<h1> Thank you for shoping at my online store! </h1>

<?php
// process form and get values from the form

$q1 = $_POST['q1'];
$q2 = $_POST['q2'];
$q3 = $_POST['q3'];
$q4 = $_POST['q4'];
$result=0;








if($q1=="7"){
  $result+=25;
}
if($q2=="Pacific"){
  $result+=25;
}
if($q3=="Canada"){
  $result+=25;
}
if($q4=="4"){
  $result+=25;
}
echo nl2br ("<h3>Your total is $result !</h3>");

print("<hr>");
print("The correct answers are <h4>1.7</h4><h4>2.Pacific</h4><h4>3.Canada</h4><h4>4.4</h4>");


?>
</body>
</html>
