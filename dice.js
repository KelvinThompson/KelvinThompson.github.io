document.addEventListener("keydown", diceFunction);
document.addEventListener("click", diceFunction);
document.addEventListener("touchend", diceFunction);

function diceFunction () {

// Dice roll player 1
var randomNumber1 = Math.floor (Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";
var image1 = document.querySelector ("#player1");
image1.setAttribute("src", randomDiceImage1);

// Dice roll player 2
var randomNumber2 = Math.floor (Math.random() * 6) + 1;
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";
var image2 = document.querySelector ("#player2");
image2.setAttribute("src", randomDiceImage2);

// Game rules
var result = document.querySelector("h1");

if (randomNumber1 == randomNumber2) {
    result.innerHTML = "Draw";
} else if (randomNumber1 > randomNumber2) {
    result.innerHTML = "Player 1 wins";
} else if (randomNumber2 > randomNumber1) {
    result.innerHTML = "Player 2 wins";
}

}

