

var dicePlayer1 = Math.random()*6;
dicePlayer1 = Math.floor(dicePlayer1) + 1;
var dicePlayer2 = Math.random()*6;
dicePlayer2 = Math.floor(dicePlayer2) + 1;

//alert("dicePlayer1 = " + dicePlayer1);
//alert("dicePlayer2 = " + dicePlayer2);

if (dicePlayer1 === dicePlayer2) {
  //draw
  document.querySelector("h1").innerHTML = "Draw";
}else if (dicePlayer1 > dicePlayer2){
  //player1 wins
  document.querySelector("h1").innerHTML = "Player1 wins";
}else{
  //Player2 wins
  document.querySelector("h1").innerHTML = "Player2 wins";
}

//show the picture of the players' dice
var player1_img = "images/dice" + dicePlayer1 +".png";
var player2_img = "images/dice" + dicePlayer2 +".png";
document.querySelector(".img1").setAttribute("src",player1_img);
document.querySelector(".img2").setAttribute("src",player2_img);
