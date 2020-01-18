const WINNER_CHECKS = [Horizon, Vertical, Diagonal, AntiDiagonal];

export function winnerDetermined(board, row, col) {
    return WINNER_CHECKS.some(fn => fn(board, row, col));
}

function Horizon(board, row, col) {
    let count = 1;
    let c = col - 1;
    while (c >= 0 && board[row][c] === board[row][col]) {
        count += 1;
        c -= 1;
    }

    c = col + 1;
    while (c < 19 && board[row][c] === board[row][col]) {
        count += 1;
        c += 1;
    }

    return count >= 5;
}

function Vertical(board, row, col) {
    let count = 1;
    let r = row - 1;
    while (r >= 0 && board[r][col] === board[row][col]) {
        count += 1;
        r -= 1;
    }

    r = row + 1;
    while (r < 19 && board[r][col] === board[row][col]) {
        count += 1;
        r += 1;
    }

    return count >= 5;
}

function Diagonal(board, row, col) {
    let count = 1;
    let i = -1;
    while (row + i >= 0 && col + i >= 0 && board[row+i][col+i] === board[row][col]) {
        count += 1;
        i -= 1;
    }

    i = 1;
    while (row + i < 19 && col + i < 19 && board[row+i][col+i] === board[row][col]) {
        count += 1;
        i += 1;
    }

    return count >= 5;
}

function AntiDiagonal(board, row, col) {
    let count = 1;
    let i = -1;
    while (row + i >= 0 && col - i < 19 && board[row+i][col-i] === board[row][col]) {
        count += 1;
        i -= 1;
    }

    i = 1;
    while (row + i < 19 && col - i >= 0 && board[row+i][col-i] === board[row][col]) {
        count += 1;
        i += 1;
    }

    return count >= 5;
}
