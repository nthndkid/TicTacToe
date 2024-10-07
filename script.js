/* Tic tac Toe 
# Tic Tac Toe Project

0 1 2
x x x 0
o o o 1
x o x 2
*/

// intialize prompt
const prompt =  require("prompt-sync")()

// function to make a move and validate
function makeMove(turn, board){
    while (true) {
        const row = parseInt(prompt("Enter row: "));
        const col = parseInt(prompt("Enter col: "));

        // invalid row is less than 1 and greater than 3
        if(isNaN(row) || row < 1 || row > 3 ) {
            console.log("Invalid row.")
        } 
        // invalid col is less than 1 and greater than 3
        else if (isNaN(col) || col < 1 || col > 3) {
            console.log("Invalid column.")
        } 
        // if the space is already occupied
        else if (board[row - 1][col - 1] !== " ") {
            console.log("Invalid Position.")
        }
        // if validated then place the move on the board
        else {
            board[row - 1][col -1] = turn
            break
        }
    }
};

// function to display and update the board
function displayBoard(board) {
    // display the rows of the board
    for(let i = 0; i < board.length; i++) {
        const row = board [i]
        let rowString = ""

        // display the values of a row
        for(let z = 0; z < row.length; z++) {
            rowString += row[z]

            if (z != row.length - 1) {
                rowString += " | "
            }
        }
        console.log(rowString)

        // display a divider per between rows
        if (i != board.length - 1) {
            console.log("---------")
        }
    }
};

// function to check if the turn has won
function checkWin(board, turn) {
    const lines = [
        // rows pattern won
        [[0, 0], [0, 1], [0, 2]], 
        [[1, 0], [1, 1], [1, 2]], 
        [[2, 0], [2, 1], [2, 2]],

        // cols pattern won
        [[0, 0], [1, 0], [2, 0]],
        [[0, 1], [1, 1], [2, 1]],
        [[0, 2], [1, 2], [2, 2]],

        // diagonal pattern won
        [[0, 0], [1, 1], [2, 2]],
        [[0, 2], [1, 1], [2, 0]]
    ]

    // iterate through the lines
    for (let line of lines) {
        // decalare a variable to check if it won
        let win = true;

        // iterate all the position turned by the player
        for (let pos of line) { 
            const [row, col] = pos;

            // if the row and col doens't have any turn yet, win is false
            if (board[row][col] !== turn) {
                win = false;
                break;
            }
        }
        // if won return true
        if (win) {
            return true
        }
    }
    // if any winning patterns doesn't match or exist yet, no turn won
    return false;
}

// board layout
const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
];

let turn = "X"; // decalre player variable 
let turnCount = 0; // declare count variable to determine the turn counts
let win = false; // declare bool variable to determine if won 

// display tictactoe board
displayBoard(board);
console.log();

// do this while turn counts isn't 9
while (turnCount < 9) {
    console.log(turn, "player turn.") // display player turns
    makeMove(turn, board); // method to insert a move
    displayBoard(board); // display the current board to the player
    console.log();

    // check if player has won
    win = checkWin(board, turn); // evaluate whether player has already satisfy the winning patterns

    // if win return true
    if (win) {
        console.log(turn, "player wins!")
        break;
    }
    
    // determine whose turn is
    if (turn == "X") {
        turn = "0"
    } else {
        turn = "X"
    }
    
    // increment turn count as the game doens't have a winner
    turnCount++;
}

// if turn count already reach 9 turn and nobody won, then it will be a tie game
if (!win) {
    console.log("Tie game!")
}