function change()
{
	document.body.style.background = "black";
  let bt = document.getElementById("button1");
  bt.style.backgroundColor="white";
  bt.style.border= "dotted 5px silver";
  bt.style.fontStlye= "Arial";
  let word1 = document.getElementById("p1");
	let word2 = document.getElementById("p2");
	word1.style.color = "white"
	word2.style.color = "white"
}

function randPrize()
{
  const prizes =["Ipad","Iphone","Airpods","Applewatch","An Apple"];
  let prize = prizes[Math.floor(Math.random() * 6)];

  document.getElementById("prize").innerHTML= "Congratulations! You got an "+prize+ " :)!!!!";

}

function swapT(){
  let p1= document.getElementById("p1")
  let text1= p1.textContent;
  let p2= document.getElementById("p2")
  let text2 = p2.textContent;
  p1.textContent = text2;
  p2.textContent = text1;

}

function swapImg(){
  let img1= document.getElementById("img1");
  let pro1= img1.src;
  let img2= document.getElementById("img2");
  let pro2 = img2.src;
  img1.src = pro2;
  img2.src = pro1;
}
