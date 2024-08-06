// store the gameboard as an array
// players stored in objects
// an object to control the flow of the game

//tips: have as little global code as possible
// tuck as much as possible into function factories
// three kinds of objects
    // - a gameboard
    // - a player
    // - a game

// use an object for the display logic
// probably need to create an object for the interface

const game = (function(){

}());

// functions
const gameboard = (function(){


    const gameBoard = []

    function createGameboard(){ 

        let gameBoard = document.querySelector(".gameboard")
    
        for(let i = 1; i < 10; i ++){
    
            let square = document.createElement("div"); 
            square.classList.add("square"); 
            square.setAttribute('id', i);
            square.innerText = i; 
            gameBoard.appendChild(square);
    
    
        }
    }

    function toggleBlock(){

    }

    return {createGameboard}

})(); 
// run functions



function makeGameBoard(){
    // dimensions of the board
    const rows = 3; 
    const columns = 3; 
    const board = []

    // creating a 3x3 array to function as the tic-tac-toe gameboard
    for(let i = 0; i < rows; i++){
        board[i] = []; 
        for(let j = 0; j < columns; j++){
            board[i].push(""); 
        }
    }

    return board 
}; 

const player = (name, token) => {

    const getName = () => name; 
    const getToken = () => token; 

    return {
        getName, 
        getToken
    }; 

}; 


function getUserInput(){

    var row = prompt("Select row"); 
    var column = prompt("Select column"); 

    const selection = {
        row: row, 
        column: column
    }

    return { 
        selection
    }

}

// run functions
userInput = getUserInput();
gameboard.createGameboard(); 


