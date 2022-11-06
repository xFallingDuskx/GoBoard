// VARIABLES
let numPlayers,
    teamOneBidEntry,
    teamTwoBidEntry,
    teamOneMembersInput,
    teamTwoMembersInput,
    teamOneNumBags,
    teamTwoNumBags;
let round = 1;
let numBids = 4;
let winningScore = 400;

let gameRoundDialogEl = document.getElementById("game-round-dialog");
let gameRoundDialogBackground = document.getElementById("game-round-dialog-background");
let gameRoundDialogButtonEl = document.getElementById("btn-submit-round-info");
let gameRoundDialogErrorText = document.getElementById("game-round-dialog-error-text");
let gameRoundDialogRoundNum = document.getElementById("game-round-dialog-round-num");
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
}

function closeRoundDialog() {
    gameRoundDialogBackground.style.display = "none";
    gameRoundDialogEl.style.display = "none";
}

function createScoreboard() {
    welcomeTextEl.style.display = "none";
    scoreboardContainerEl.style.display = "block";

    console.log(teamOneMembersInput.join(" & "));
    console.log(teamTwoMembersInput.join(" & "));

    scoreboardEl.innerHTML += (
        "<tr><th>Round</th><th>" + teamOneMembersInput.join(" & ") + "</th><th>" +
            teamTwoMembersInput.join(" & ") + "</th><th>Bags<br>(T1 - T2)</th></tr>"
    );

    setTimeout(displayRoundDialog(), 1000);
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

function displayRoundDialog() {
    gameRoundDialogRoundNum.textContent = round;
    gameRoundDialogBackground.style.display = "flex";
    gameRoundDialogEl.style.display = "block";
    gameRoundDialogButtonEl.disabled = true;
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
}

function processRoundInput() {
    const teamOneBidInput = document.querySelector('input[name="bids-team-one"]');
    const teamTwoBidInput = document.querySelector('input[name="bids-team-two"]');

    teamOneBidEntry = teamOneBidInput.value;
    teamTwoBidEntry = teamTwoBidInput.value;

    if (!validateBidEntry(teamOneBidInput)) {
        shakeButton();
        return;
    }
    if (!validateBidEntry(teamTwoBidInput)) {
        shakeButton();
        return;
    }

    closeRoundDialog();
}

function record() {
    // TODO scoreboardEl.innerHTML += (     "<tr><td>" + round + "</td><td>" +
    // teamOneScore + "</td><td>" + teamTwoScore + "</td><td>" + bags + "</td></tr>"
    // );
}

function shakeButton() {
    gameRoundDialogButtonEl
        .classList
        .add("shake");
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
            setTimeout(createScoreboard, 3000);
            return
        }
        setTimeout(welcomeUsers, 50, num);
    }
}

// Returns true if the bid entry is valid
function validateBidEntry(entry) {
    const bid = entry.value;
    if (bid === "n" || bid === "b") {
        gameRoundDialogErrorText.textContent = "";
        gameRoundDialogButtonEl.disabled = false;
    } else if (!/^[0-9]+$/.test(bid)) {
        gameRoundDialogErrorText.textContent = "Must enter a number for each bid";
        gameRoundDialogButtonEl.disabled = true;
    } else if (bid < numBids) {
        gameRoundDialogErrorText.textContent = "Cannot enter a bid below " +
                numBids;
        gameRoundDialogButtonEl.disabled = true;
    } else if (bid > 13) {
        gameRoundDialogErrorText.textContent = "Cannot enter a bid above 13";
        gameRoundDialogButtonEl.disabled = true;
    } else {
        gameRoundDialogErrorText.textContent = "";
        gameRoundDialogButtonEl.disabled = false;
    }

    return !gameRoundDialogButtonEl.disabled;
}