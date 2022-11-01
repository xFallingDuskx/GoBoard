// VARIABLES
let numPlayers,
    teamOneMembersInput,
    teamTwoMembersInput;
let numBids = 4;
let winningScore = 400;

let gameScreenEl = document.getElementById("game-screen");
let mainPanelEl = document.getElementById("main-panel");
let numBidsIndicator = document.getElementById("num-bids-indicator");
let overlayEl = document.getElementById("overlay");
let scoreboardEl = document.getElementById("scoreboard");
let scoreboardContainerEl = document.getElementById("scoreboard-container");
let welcomeTextEl = document.getElementById("welcome-text");
let winningScoreIndicator = document.getElementById("winning-score-indicator");

const welcomeTextOne = "Seems like you're all set to get started! Best of luck to both teams!";
const welcomeTextTwo = "Oh and do try not to renege. No one likes that person " +
        String.fromCodePoint(0x1F608) + " except the other team, of course.";

// EVENT LISTENERS
window.addEventListener("load", dialogTrigger);
window.addEventListener("resize", dialogTrigger);

// FUNCTIONS
function changeInputBackground(field) {
    if (field.value != "") {
        field.style.backgroundColor = "rgb(245, 245, 245, 0.7)";
    } else {
        field.style.backgroundColor = "#9a805e";
    }
}

function closePanel() {
    let effect;
    if (window.innerWidth <= 480) {
        effect = "slide-up";
    } else {
        effect = "slide-left";
    }

    mainPanelEl
        .classList
        .add(effect);
    mainPanelEl.addEventListener("animationend", switchToGameScreen(), false);

    return;
}

function createScoreboard() {
    welcomeTextEl.style.display = "none";
    scoreboardContainerEl.style.display = "block";

    console.log(teamOneMembersInput.join(" & "));
    console.log(teamTwoMembersInput.join(" & "));

    scoreboardEl.innerHTML += (
        "<tr><th>Round</th><th>" + teamOneMembersInput.join(" & ") + "</th><th>" +
            teamTwoMembersInput.join(" & ") + "</th><th>Bags</th></tr>"
    );
}

function dialogTrigger() {
    const passes = (
        window.matchMedia("(orientation: portrait)").matches && window.innerWidth <= 480
    ) || (
        window.matchMedia("(orientation: landscape)").matches && window.innerWidth >= 1025
    );
    if (!passes) {
        overlayEl.style.display = "flex";
    } else {
        overlayEl.style.display = "none";
    }
}

function getGameInfo() {
    const numPlayersInput = document.querySelector(
        'input[name="btn-selection-players"]:checked'
    );

    if (numPlayersInput == null) {
        alert("missing # of players");
        return;
    }

    numPlayers = numPlayersInput.value;

    teamOneMembersInput = document
        .getElementById("teams-of-one")
        .value
        .trim()
        .split(" ");
    teamTwoMembersInput = document
        .getElementById("teams-of-two")
        .value
        .trim()
        .split(" ");

    if ((teamOneMembersInput.length != numPlayers / 2) || (teamTwoMembersInput.length != numPlayers / 2)) {
        alert("# of team members do not match selected teams' size");
        return;
    }

    closePanel();
    return;
}

function record() {
    // TODO
    // scoreboardEl.innerHTML += (
    //     "<tr><td>" + round + "</td><td>" + teamOneScore + "</td><td>" + teamTwoScore + "</td><td>" + bags + "</td></tr>"
    // );
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
    setTimeout(() => {
        mainPanelEl.style.display = "none";
        gameScreenEl.style.display = "flex";
        gameScreenEl.style.flex = "1";
        welcomeUsers(1);
    }, 1500);

    return;
}

let idx1 = 0
let idx2 = 0;
function welcomeUsers(num) {
    if (num == 1) {
        welcomeTextEl.textContent += welcomeTextOne.charAt(idx1);
        idx1++;
        if (idx1 == welcomeTextOne.length) {
            num = 2;
            welcomeTextEl.textContent += "\r\n\r\n\r\n";
        }
        setTimeout(welcomeUsers, 50, num);
    } else {
        welcomeTextEl.textContent += welcomeTextTwo.charAt(idx2);
        idx2++;
        if (idx2 == welcomeTextTwo.length) {
            setTimeout(createScoreboard, 4000);
            return
        }
        setTimeout(welcomeUsers, 50, num);
    }
}