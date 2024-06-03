/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8],

]
const squareIdx = document.querySelector('#id')

/*---------------------------- Variables (state) ----------------------------*/
let board = ['','','','','','','','',''];
let turn = 'X'
let winner = false 
let tie = false


/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr')
console.dir(squareEls)

const messageEl = document.querySelector("#message")
console.dir(messageEl)

const resetBtnEl = document.querySelector('#reset')


/*-------------------------------- Functions --------------------------------*/

function init() {
board = ['','','','','','','','',''];
turn = 'X'
winner = false 
tie = false
render()
}
render()
init()


function render() {
    updateBoard()
    updateMessage()
}

function updateBoard() {
    board.forEach((square, i) => {
        if (square === 'X') {
            squareEls[i].style.backgroundColor = 'red'
        }
        else if (square === 'O') {
            squareEls[i].style.backgroundColor = 'purple'
        }
        else {
            squareEls[i].style.backgroundColor = 'gray'
}
    })};

 
   function updateMessage() {
    if (!winner && !tie) {
        messageEl.textContent = `It's players ${turn} turn`
    } else if (!winner && tie) {
        messageEl.textContent = `It's a tie`
    } else {
        messageEl.textContent = `Congratulations ${turn} you have won!`
    }
   
}
   
   
   
   
   
    /*if (winner && tie === false) {
        render(turn = '');
        } 
    if  (winner === false && tie === true ) {
        render("tie");*/
   

   
   
/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((square) => {
    square.addEventListener('click', handleClick)
});
resetBtnEl.addEventListener('click', init)
// resetBtnEl.addEventListener('click', init);







function placePiece(idx) {
    if(!board[idx]){
        board[idx] = turn
    }

}
function handleClick(event) {
const squareIdx = event.target.id
placePiece(squareIdx)
checkForWinner(board)
checkForTie(board)
switchPlayerTurn(board)
render()
}


function checkForWinner () {
    if (board[0] === board[1] && board[0] === board[2] && board[0] !==  ''){
        winner = true
} else if  (board[3] === board[4] && board[3] === board[5] && board[3] !==  ''){
        winner = true
} else if (board[6] === board[7] && board[6] === board[8] && board[6] !==  ''){
        winner = true
} else if (board[0] === board[4] && board[0] === board[8] && board[0] !==  ''){
        winner = true
} else if (board[2] === board[4] && board[2] === board[6] && board[2] !==  ''){
        winner = true      
} else if (board[0] === board[3] && board[0] === board[6] && board[0] !==  ''){
        winner = true
} else if (board[1] === board[4] && board[1] === board[7] && board[1] !==  ''){
        winner = true    
} else if  (board[2] === board[5] && board[2] === board[8] && board[2] !==  ''){
        winner = true                    
    }
}

function checkForTie() {
    if (winner === true) {
    return 
}   if (board.includes('')) {
    tie = false
}   else { 
    tie = true
}
} 
function switchPlayerTurn() {
    if (winner === true) {
        return
}   else { if (turn === 'X') {
        turn = 'O'
}   else {
    turn = 'X' 
}
}
}

render()
    //  turn 'X' = 'O' || turn 'X' = 'O'





    // winningCombos.forEach((combo)