let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let currentPlayer = 'X';
let gameActive = true;
let winnerMessage = document.querySelector('#winner-message');
let clickSound = new Audio('pencil.mp3');

function checkWinner() {

    for (let i = 0; i < 3; i++) {
        if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return board[i][0];
        }
    }


    for (let i = 0; i < 3; i++) {
        if (board[0][i] !== '' && board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return board[0][i];
        }
    }


    if (board[0][0] !== '' && board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
        return board[0][0];
    }
    if (board[0][2] !== '' && board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return board[0][2];
    }


    return null;
}

document.querySelectorAll('#board td').forEach(cell => {
    cell.addEventListener('click', () => {
        let row = cell.parentNode.rowIndex;
        let col = cell.cellIndex;

        if (gameActive && board[row][col] === '') {
            board[row][col] = currentPlayer;
            cell.textContent = currentPlayer;
            clickSound.play();

            let winner = checkWinner();
            if (winner) {
                gameActive = false;
                winnerMessage.textContent = winner + ' wins!';
            } else {
                if (currentPlayer === 'X') {
                    currentPlayer = 'O';
                } else {
                    currentPlayer = 'X';
                }
            }
        }
    });
});

document.querySelector('#reset').addEventListener('click', () => {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    currentPlayer = 'X';
    gameActive = true;

    document.querySelectorAll('#board td').forEach(cell => {
        cell.textContent = '';
    });

    winnerMessage.textContent = '';
});
