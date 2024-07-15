<!DOCTYPE HTML>
<HTML>
<head>
<title>Result</title>
<link rel="stylesheet" type="text/css" href="../asg4/holidayCalendar.css">
</head>
<body>

<h1> Result </h1>

<?php
/*if(isset($_GET['n1'])){
  $num1 = $_GET['n1'];
}
if(isset($_GET['n2'])){
  $num1 = $_GET['n2'];
}
if(isset($_GET["op"])){
  $num1 = $_GET["op"];
}*/
//$num1 = $_GET["number1"];
//$num2 = $_GET["number2"];
$op = $_POST['op'];
$n1 = floatval($_POST["n1"]);
$n2 = floatval($_POST["n2"]);

function add(


  )
{
$result = $n1+$n2;
print( "The result of adding: $n1 + $n2 = $result" );
}

function minus()
{
$result = $n1-$n2;
print($n1);
}

function multi()
{
$result = $n1 * $n2;
print($result);
}

function divide()
{
$result = $n1 / $n2;
print($result);
}

if ($op=="plus"){
  add();
}
else if ($op=="minus"){
  minus();
}
else if ($op=="multi"){
  multi();
}
else{
  divide();
}


?>



</body>
</html>
