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
    // Create players
    const playerOne = PlayerFactory("Abby", "X");
    const playerTwo = PlayerFactory("Bob", "O");

    return {
        playerOne,
        playerTwo,
    };
})();

console.log(gameSetUp.playerOne);
console.log(gameSetUp.playerTwo);