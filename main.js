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
    const roundCounter = 1;

    // Make cells of tic-tac-toe board clickable
    const cells = document.querySelectorAll("button.cell");
    cells.forEach((cell) => {
        cell.addEventListener("click", () => {
            cell.textContent = "clicked";
        });
    });

    return {
        playerOne,
        playerTwo,
        roundCounter,
        cells,
    };
})();

// playRound function
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