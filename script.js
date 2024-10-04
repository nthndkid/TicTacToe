/* Tic tac Toe 
# Tic Tac Toe Project

0 1 2
x x x 0
o o o 1
x o x 2
*/

const prompt =  require("prompt-sync")()


function makeMove(turn, board){
    while (true) {
        const row = parseInt(prompt("Enter row: "));
        const col = parseInt(prompt("Enter col: "));

        if(isNaN(row) || row < 1 || row > 3 ) {
            console.log("Invalid row.")
        } 
        else if (isNaN(col) || col < 1 || col > 3) {
            console.log("Invalid column.")
        } 
        else if (board[row - 1][col - 1] !== " ") {
            console.log("Invalid Position.")
        }
        else {
            board[row - 1][col -1] = turn
            break
        }
    }
};

function displayBoard(board) {
    for(let i = 0; i < board.length; i++) {
        const row = board [i]
        let rowString = ""

        for(let z = 0; z < row.length; z++) {
            rowString += row[z]

            if (z != row.length - 1) {
                rowString += " | "
            }
        }
        console.log(rowString)
        if (i != board.length - 1) {
            console.log("---------")
        }
    }
};

const board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
];

let turn = "X";
let turnCount = 0;

displayBoard(board);
console.log();

while (turnCount < 9) {
    console.log("It is the", turn, "`player turn.")
    makeMove(turn, board);
    displayBoard(board);
    console.log();
    
    if (turn == "X") {
        turn = "0"
    } else {
        turn = "X"
    }
    
    turnCount++;
}