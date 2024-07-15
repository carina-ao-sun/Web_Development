let rose = document.getElementById("number_rose")
rose.addEventListener("change", subTotal_rose);
let orchid = document.getElementById("number_orchid")
orchid.addEventListener("change", subTotal_orchid);
let peony = document.getElementById("number_peony")
peony.addEventListener("change", subTotal_peony);
let birthday = document.getElementById("number_Birthday")
birthday.addEventListener("change", subTotal_Birthday);
let basket = document.getElementById("number_basket")
basket.addEventListener("change", subTotal_basket);
function total(){
  document.getElementById("grand_total").value =grand_total;
}

let grand= document.getElementById("grand_total");
//let totals = parseInt(grand,10);
//let totals = grand_total.value;
let totals = 0;
grand.value = totals


function subTotal_rose(){
  var items = document.getElementById("number_rose").value;
  var price = document.getElementById('price_rose').value;

  var stotal = items * price;
  document.getElementById("subtotal_rose").value= stotal;
  totals+=stotal;
  grand.value = totals

}

function subTotal_orchid(){
  var items = document.getElementById("number_orchid").value;
  var price = document.getElementById('price_orchid').value;

  var stotal = items * price;
  document.getElementById("subtotal_orchid").value= stotal;
  totals+=stotal;
  grand.value = totals;
}
function subTotal_peony(){
  var items = document.getElementById("number_peony").value;
  var price = document.getElementById('price_peony').value;

  var stotal = items * price;
  document.getElementById("subtotal_peony").value= stotal;
  totals+=stotal;

}
function subTotal_Birthday(){
  var items = document.getElementById("number_Birthday").value;
  var price = document.getElementById('price_Birthday').value;

  var stotal = items * price;
  document.getElementById("subtotal_Birthday").value= stotal;
  totals+=stotal;
}
function subTotal_basket(){
  var items = document.getElementById("number_basket").value;
  var price = document.getElementById('price_basket').value;

  var stotal = items * price;
  document.getElementById("subtotal_basket").value= stotal;
  totals+=stotal;
  grand.value = totals;
}


let obj= document.forms[0];
obj.addEventListener("submit", function(e)
{

	 e.preventDefault();
let len = obj.elements.length;

let text =  "<hr><h1> Thanks for your purchase! </h1>";
for (let i=0; i < 12; i++)
{

if ((obj.elements[i].value == "") || (obj.elements[i].value == null))
  {
  alert("Make sure to input " + obj.elements[i].name);
  obj.elements[i].focus();
	obj.elements[i].select();
	obj.elements[i].style.backgroundColor="blue";
  return;
  }

//zip code
else if ((i == 2 ) && (obj.elements[i].value.length != 5)  )
  {

  	alert("Make sure to input 5 digits for " + obj.elements[i].name);
  	obj.elements[i].focus();
  	obj.elements[i].select();
  	obj.elements[i].style.backgroundColor="red";
  	return;
  }

//Email
else if ((i == 3 ) && (obj.elements[i].value==/^\S+@\S+\.\S+$/))
  {

  	alert("You entered an invalid email address!");
  	obj.elements[i].focus();
  	obj.elements[i].select();
  	obj.elements[i].style.backgroundColor="blue";
  	return;
  }

  else if((i == 6 ) &&(obj.elements[5].value=="shipping")){
    totals+=6;
    grand.value = totals;
  }

  /*else if(( i== 9 ) &&(obj.elements[7].value!="^\d{16}$")){
    alert("You entered an invalid card number!");
  	obj.elements[i].focus();
  	obj.elements[i].select();
  	obj.elements[i].style.backgroundColor="blue";
  	return;
  }*/

  else
  {

  text += obj.elements[i].name.toUpperCase();
  text += ":";
  text += obj.elements[i].value;

  text += "<p>";
  }}

  document.getElementById("demo").innerHTML= text;
  console.log(text);


  });
