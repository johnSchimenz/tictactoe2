// gameBoard module
const gameBoard = (() => {
    gameBoardArray = ["", "", "", "", "", "", "", "", ""];
    return gameBoardArray
})();

// Player factory
const PlayerFactory = (name, marker) => {
    winner = false;
    return {name, marker, winner};
};

// gameSetUp module
const gameSetUp = (() => {
    // Creates the two players and roundCounter
    const playerOne = PlayerFactory("Abby", "X");
    const playerOneDisplay = document.querySelector("#top-left");
    playerOneDisplay.textContent = playerOne.name + " - " + playerOne.marker;

    const playerTwo = PlayerFactory("Bob", "O");
    const playerTwoDisplay = document.querySelector("#top-right");
    playerTwoDisplay.textContent = playerTwo.name + " - " + playerTwo.marker;

    const bottomMessageDisplay = document.querySelector("#bottom");
    bottomMessageDisplay.textContent = playerOne.name + "'s turn";

    let roundCounter = 1;

    return {
        playerOne,
        playerTwo,
        roundCounter,
    };
})();

// checkWinner function
function checkWinner(player, marker) {
    if (
        gameBoardArray[0] === marker && gameBoardArray[1] == marker && gameBoardArray[2] === marker ||
        gameBoardArray[3] === marker && gameBoardArray[4] == marker && gameBoardArray[5] === marker ||
        gameBoardArray[6] === marker && gameBoardArray[7] == marker && gameBoardArray[8] === marker ||
        gameBoardArray[0] === marker && gameBoardArray[3] == marker && gameBoardArray[6] === marker ||
        gameBoardArray[1] === marker && gameBoardArray[4] == marker && gameBoardArray[7] === marker ||
        gameBoardArray[2] === marker && gameBoardArray[5] == marker && gameBoardArray[8] === marker ||
        gameBoardArray[0] === marker && gameBoardArray[4] == marker && gameBoardArray[8] === marker ||
        gameBoardArray[2] === marker && gameBoardArray[4] == marker && gameBoardArray[6] === marker
        ) {
            player.winner = true;
            return player;
        }
}

// displayCurrentResults
function displayCurrentResults(playerOne, playerTwo, roundCounter) {
    const bottomMessageDisplay = document.querySelector("#bottom");
    if (playerOne.winner === true) {
        bottomMessageDisplay.textContent = playerOne.name + " is the winner!  Play again?";
    }
    if (playerTwo.winner === true) {
        bottomMessageDisplay.textContent = playerTwo.name + " is the winner!  Play again?";
    }
    if (playerOne.winner === false && playerTwo.winner === false && roundCounter >=10) {
        bottomMessageDisplay.textContent = "Tie game.  Play again?";
    }
}

// playRound module
const playRound = (() => {
    // Creates a display along the top for the round
    const roundDisplay = document.querySelector("#top-center");
    roundDisplay.textContent = "Round " + gameSetUp.roundCounter;
    
    // Make cells of tic-tac-toe board clickable
    const cells = document.querySelectorAll("button.cell");
    cells.forEach((cell) => {
        cell.addEventListener("click", () => {
            // Get clicked cell's id
            let elementId = cell.getAttribute("id");

            // Initialize currentPlayer
            let currentPlayer = "";

            // Initialize bottom message to nothing (will display things based on clicks)
            const bottomMessageDisplay = document.querySelector("#bottom");

            // Make cell display current player's marker, add 1 to roundCounter, and check if we have a winner
            if (gameSetUp.roundCounter % 2 === 1 && cell.textContent === "") {
                currentPlayer = gameSetUp.playerOne;
                cell.textContent = currentPlayer.marker;
                gameSetUp.roundCounter++;
                roundDisplay.textContent = "Round " + gameSetUp.roundCounter;
                bottomMessageDisplay.textContent = gameSetUp.playerTwo.name + "'s turn";
            }
            else if (gameSetUp.roundCounter % 2 === 0 && cell.textContent === "") {
                currentPlayer = gameSetUp.playerTwo;
                cell.textContent = currentPlayer.marker;
                gameSetUp.roundCounter++;
                roundDisplay.textContent = "Round " + gameSetUp.roundCounter;
                bottomMessageDisplay.textContent = gameSetUp.playerOne.name + "'s turn";
            }
            else {
                bottomMessageDisplay.textContent = "Can't click on an already chosen spot.  Click an empty spot.";
            }

            // Makes sure Round does not display "10"
            if (gameSetUp.roundCounter === 10) {
                roundDisplay.textContent = "";
            };

            // Change gameBoardArray to reflect the current player's choice
            let idNumber = elementId.slice(4, 5);
            gameBoardArray[idNumber] = cell.textContent;

            // Check if there is a winner
            checkWinner(currentPlayer, currentPlayer.marker);

            // Display what to do next
            displayCurrentResults(gameSetUp.playerOne, gameSetUp.playerTwo, gameSetUp.roundCounter);

            // Makes reset button clickable
            const resetGameBoard = document.querySelector("#reset");
            resetGameBoard.addEventListener("click", () => {
                gameSetUp.roundCounter = 1;
                gameBoardArray = ["", "", "", "", "", "", "", "", ""];
                cells.forEach((cell) => {
                    cell.textContent = "";
                })
                bottomMessageDisplay.textContent = gameSetUp.playerOne.name + "'s turn";
            })
        });
    });
})();