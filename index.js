let numBids = 4;
let winningScore = 400;

let gameScreenEl = document.getElementById("game-screen");
let numBidsIndicator = document.getElementById("num-bids-indicator");
let mainPanelEl = document.getElementById("main-panel");
let winningScoreIndicator = document.getElementById("winning-score-indicator");

function changeInputBackground(field) {
    if (field.value != "") {
        field.style.backgroundColor = "rgb(245, 245, 245, 0.7)";
    } else {
        field.style.backgroundColor = "#9a805e";
    }
}

function closePanel() {
    if (window.innerWidth <= 576) {
        mainPanelEl.classList.add("slide-up");
        mainPanelEl.addEventListener("animationend", switchToGameScreen(), false);
    }
    return;
}

function getGameInfo() {
    closePanel();
    return;


    const numOfPlayersInput = document.querySelector(
        'input[name="btn-selection-players"]:checked'
    );

    if (numOfPlayersInput == null) {
        alert("missing # of players");
        return;
    }
    const numOfPlayers = numOfPlayersInput.value;

    const teamOneMembersInput = document
        .getElementById("teams-of-one")
        .value
        .trim()
        .split(" ");
    const teamTwoMembersInput = document
        .getElementById("teams-of-two")
        .value
        .trim()
        .split(" ");

    if ((teamOneMembersInput.length != numOfPlayers / 2) || (teamTwoMembersInput.length != numOfPlayers / 2)) {
        alert("# of team members do not match selected teams' size");
        return;
    }
}

function setInputBackground(field) {
    if (field.value != "") {
        field.style.backgroundColor = "white";
    } else {
        field.style.backgroundColor = "#9a805e";
    }
}

function setRangeIndicator(input, item) {
    if (item == "bids") {
        numBidsIndicator.textContent = numBids = input.value;
    } else {
        winningScoreIndicator.textContent = winningScore = input.value;
    }
}

function switchToGameScreen() {
    if (window.innerWidth <= 576) {
        setTimeout(() => {
            mainPanelEl.style.display = "none";
            gameScreenEl.style.display = "flex";
            gameScreenEl.style.flex = "1";
        }, 1500);
    }
    return;
}