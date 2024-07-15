function crap(){
  //  declare image array

  let img = new Array ("dice_1.gif", "dice_2.gif", "dice_3.gif", "dice_4.gif", "dice_5.gif", "dice_6.gif")
  let reaction = new Array("trophy.gif","sad.gif","try.gif")
  var die1 = Math.floor(Math.random() * 6) + 1;
  var die2 = Math.floor(Math.random() * 6) + 1;

  // sum of rolling 2 dice
  var total = die1 + die2;

  let result = " <h2> Try your luck! </h2>";
  result += " <p>dice 1 roll:" + die1 + "<p> <img src=" + img[die1-1] + "> <p>";
  result += " <p> dice 2 roll:"+ die2 + "<p> <img src=" + img[die2-1] + "> <p>";
  result += " <p>The sum is " + total + "<p>";


  if (total == 7 || total == 11){
    result += "<p> you won the game - congrats! ";
    result += "<p> <img src=" + reaction[0] + "> <p>";
  }

  else if (total == 2 || total == 3 || total ==12) {
    result += "<p> CRAPPING OUT!!! "
    result += "<p> <img src=" + reaction[1] + "> <p>";
  }

  else {
    result += "<p> Please try again! ";
    result += "<p> <img src=" + reaction[2] + "> <p>";
  }


  // create a variable to hold the first few HTML tags
  let HTML =" <!DOCTYPE html><html><head><link rel='stylesheet' href='../../Homepage/style.css' type='text/css'><link rel='stylesheet' href='crapGame.css' type='text/css'></head> <body>";

  // open a new document
  document.open();
  document.write(HTML);
  document.title = "Game of Crap!";
  document.write("<script type='text/javascript' src='crapGame.js'> </script>");

  document.write(result);

  document.write("<p><button onclick='crap()'> Try again </button>");



}
