window.onload = functionC;


function functionC(){

let fortune = new Array("Do what you love, the rest will fall into place", "Change comes with embracing the future,not fighting your past", "You will receive great news today", " Pleasures await you by the sea", "Skill comes from diligence")

let imgs = new Array("img1.jpg","img2.jfif","img3.jpg","img4.jpg","img5.jpg")

let randnum = Math.floor(Math.random() *imgs.length);

// access the first image object on the page so we can change it's src
let obj1 = document.getElementById("imageC");
let obj2 = document.getElementById("fortuneC");
obj1.src = imgs[randnum];
obj2.innerHTML =fortune[randnum];

}
