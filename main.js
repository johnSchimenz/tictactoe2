// gameBoard module
const gameBoard = (() => {
    gameBoardArray = ["", "", "", "", "", "", "", "", ""];
    return gameBoardArray
})();

// Player factory
const PlayerFactory = (playerName, marker) => {
    winner = false;
    return {playerName, marker, winner};
};

// gameSetUp module
const gameSetUp = (() => {
    // Create players and roundCounter
    const playerOne = PlayerFactory("Abby", "X");
    const playerTwo = PlayerFactory("Bob", "O");
    let roundCounter = 1;

    return {
        playerOne,
        playerTwo,
        roundCounter,
    };
})();
console.log(gameSetUp.roundCounter);

// Make cells of tic-tac-toe board clickable - not sure if this needs to be in a module or factory
const cells = document.querySelectorAll("button.cell");
cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        let currentMarker = "";
        if (gameSetUp.roundCounter % 2 === 1) {
            cell.textContent = gameSetUp.playerOne.marker;
        }
        if (gameSetUp.roundCounter % 2 === 0) {
            cell.textContent = gameSetUp.playerTwo.marker;
        }
        // cell.textContent = currentMarker;
        gameSetUp.roundCounter++;
    });
});

function playRound() {
    // Determine who is the current player
    const currentPlayer = ""
    if (roundCounter % 2 === 1) {
        currentPlayer = playerOne;
    }
    if (roundCounter % 2 === 0) {
        currentPlayer = playerTwo;
    }


}