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

const player = (name, token) => {
  const getName = name;
  const getToken = token;

  return {
    getName,
    getToken,
  };
};

const Gameboard = (function(){

    function



})(); 

const game = (function(){

    

})(); 

const createUI = (function () {
  function createGameboard() {
    let gameboard = document.querySelector(".gameboard");
    for (i = 1; i < 10; i++) {
      let square = document.createElement("div");
      square.classList.add("square");
      square.setAttribute("id", i);
      square.innerText = i;
      gameboard.appendChild(square);
    }
  }

  // What all do we want back?
  return {
    createGameboard,
  };
})();

// run functions

// obviously the first thing is we gotta create the UI
createUI.createGameboard();
