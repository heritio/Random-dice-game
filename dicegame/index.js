

var heading = document.querySelector(".h1");
var player1 = document.getElementById("player1");
var player2 = document.getElementById("player2");





function diceGame() {
    var random1 = Math.floor(Math.random() * 6) + 1;
    var random2 = Math.floor(Math.random() * 6) + 1;

    player1.setAttribute("src", "d-" + random1 + ".PNG");

    player2.setAttribute("src", "d-" + random2 + ".PNG");


    if (random1 > random2) {
        heading.textContent = "Player 1 won this round";
    } else if (random2 > random1) {
        heading.textContent = "Player 2 won this round";
    } else {
        heading.textContent = "Its a draw";
    }


}

diceGame();