let fourPlayerElement = document.getElementById("4-players");
let twoPlayerElement = document.getElementById("2-players");

let numOfPlayers;

function selected2() {
    if (fourPlayerElement.style.background == "white") {
        fourPlayerElement.style.background = "#9a805e";
    }
    twoPlayerElement.style.background = "white";
    numOfPlayers = 2;
}

function selected4() {
    if (twoPlayerElement.style.background == "white") {
        twoPlayerElement.style.background = "#9a805e";
    }
    fourPlayerElement.style.background = "white";
    numOfPlayers = 4;
}