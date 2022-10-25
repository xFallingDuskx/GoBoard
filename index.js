function changeInputBackground(field) {
    if (field.value != "") {
        field.style.backgroundColor = "rgb(245, 245, 245, 0.7)";
    } else {
        field.style.backgroundColor = "#9a805e";
    }
}

function getGameInfo() {
    const numOfPlayersInput = document.querySelector(
        'input[name="btn-selection-players"]:checked'
    );
    const numOfPlayers = numOfPlayersInput == null
        ? alert("missing # of players")
        : numOfPlayersInput.value;

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
        alert("# of team members do not match selected teams' size")
    }
}

function setInputBackground(field) {
    if (field.value != "") {
        field.style.backgroundColor = "white";
    } else {
        field.style.backgroundColor = "#9a805e";
    }
}