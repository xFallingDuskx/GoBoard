function getGameInfo() {
    const numOfPlayersInput = document.querySelector(
        'input[name="btn-selection-players"]:checked'
    );
    const numOfPlayers = numOfPlayersInput == null
        ? alert("missing # of players")
        : numOfPlayersInput.value;

    console.log("Selected num of players is " + numOfPlayers);
}