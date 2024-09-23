// store the gameboard as an array
// players stored in objects
// an object to control the flow of the game

//tips: have as little global code as possible
// tuck as much as possible into function factories
// three kinds of objects
// - a gameboard
// - a player
// - a game

/* use an object for the display logic
 probably need to create an object for the interface; 
 This object probably just needs to read the state of the board

- Tic tac toe process
1. Defaults
    - There are two players: 
        - player 1: defaults to x
        - player 2: defaults to o




*/

function gameBoard() {
  const makeBoard = () => {
    return Array.from(Array(9));
  };

  let board = makeBoard();

  const getBoard = () => board;

  const updateBoard = (index, token) => {
    if (board[index] != null) {
      //return "Hello!"
    }

    if (board[index] == null) {
      board[index] = token;
    }

    return board;
  };

  /* Can't quite figure this out. As of now it won't reassign board
which means I'm misunderstanding something about scoping
9/2/2024: What I was actually misunderstanding was reassigning a value
for some reason, tryign to reassign within the function and using 
let or const before board didn't let me change the actual value
*/
  const resetBoard = () => {
    board = makeBoard();
  };

  return {
    makeBoard,
    getBoard,
    updateBoard,
    resetBoard,
  };
}

function cellLogic() {
  // set a default value to each cell
  let value = null;

  const addToken = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addToken,
    getValue,
  };
}

// what information do I need about a player for the purposes of playing tic tac toe
// What is the game flow process

// game controller handles the flow of the game
function gameController(playerOne = "Player One", playerTwo = "Player Two") {
  /*
  - the game is initialized
    - create game object
  - the first player is initialized
    - create the player object 
  - the first player picks a square
   - handled by the game object
  - the new state of the game is shown
  - the players are switched, and now you have a new active player
  - I guess all of the above would be considered a round, but there are probably other ways of conceptualizing the game
  what should it return? 
  */

  const players = {
    playerOne: {
      playerName: playerOne,
      token: "X",
    },
    playerTwo: {
      playerName: playerTwo,
      token: "Y",
    },
  };
  const game = gameBoard();
  let currentPlayer = players.playerOne;
  let currentRound  = 0;

  const switchPlayer = () => {
    if (currentPlayer == players.playerOne) {
      currentPlayer = players.playerTwo;
    } else {
      currentPlayer = players.playerOne;
    }

    return currentPlayer;
  };

  const incrementRound = () =>{
    currentRound = currentRound + 1;
  }

  const resetRound = () => { 
    currentRound = 0; 
  }

  const getCurrentPlayer = () => currentPlayer;
  const getCurrentRound = () => currentRound;

  /* Playing a round involves picking a spot, 
  switching the player, 
  printing the board
  */ 
  const playRound = (index, token = getCurrentPlayer().token) => {


    game.updateBoard(index, token = token);
    
    incrementRound();
    switchPlayer(); 

  }

  return {
    switchPlayer,
    getCurrentPlayer,
    getCurrentRound,
    resetRound,
    playRound, 
    game

  };
}

function gameInterface() {
  const game = gameController();
  const scoreboard = document.querySelector('.scoreboard');
  const boardDiv = document.querySelector(".gameboard");

  const updateScreen = () => {
    // Clear the existing board
    boardDiv.innerHTML = '';

    const board = game.game.getBoard();
    
    for (let i = 0; i < board.length; i++) {
      let square = document.createElement("button");
      square.classList.add("square");
      square.dataset.index = i;
      square.innerText = board[i] || ''; // Use empty string if the cell is null
      boardDiv.appendChild(square);
    }
  }

  const updateScoreBoard = () => {

    scoreboard.innerHTML = ''

    scoreboard.innerText = game.getCurrentRound();






  }


  function buttonPress() {
    boardDiv.addEventListener('click', (e) => {
      if (e.target.classList.contains('square')) {
        const selectedButton = e.target.dataset.index;
        game.playRound(selectedButton);
        updateScreen();
        updateScoreBoard();
      }
    });
  }

  function resetBoard(){
    const resetButton = document.querySelector("#reset-button"); 
    resetButton.addEventListener('click', ()=>{

      game.game.resetBoard(); 
      game.resetRound();
      updateScreen();

    });} 

  updateScreen();
  buttonPress();
  resetBoard();
}

gameInterface();