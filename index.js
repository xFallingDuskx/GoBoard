function getGameInfo() {
    const numOfPlayersInput = document.querySelector(
        'input[name="btn-selection-players"]:checked'
    );
    const numOfPlayers = numOfPlayersInput == null
        ? alert("missing # of players")
        : numOfPlayersInput.value;

    console.log("Selected num of players is " + numOfPlayers);

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

    console.log("For team one: " + teamOneMembersInput);
    console.log("For team two: " + teamTwoMembersInput);
}