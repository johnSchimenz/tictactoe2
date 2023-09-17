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

// Make cells of tic-tac-toe board clickable - not sure if this needs to be in a module or factory
const cells = document.querySelectorAll("button.cell");
cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        // Get clicked cell's id
        let elementId = cell.getAttribute("id");

        // Make cell display current player's marker and add 1 to roundCounter
        if (gameSetUp.roundCounter % 2 === 1 && cell.textContent === "") {
            cell.textContent = gameSetUp.playerOne.marker;
            gameSetUp.roundCounter++;
        }
        else if (gameSetUp.roundCounter % 2 === 0 && cell.textContent === "") {
            cell.textContent = gameSetUp.playerTwo.marker;
            gameSetUp.roundCounter++;
        }
        else {
            alert("I've already been chosen.  Choose an empty cell");
        }

        // Change gameBoardArray to reflect the current player's choice
        let idNumber = elementId.slice(4, 5);
        gameBoardArray[idNumber] = cell.textContent;
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