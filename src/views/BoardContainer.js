import React, { Component } from 'react';
import '../styles/BoardContainer.css';
import Board from './Board';
import StoneContainer from './StoneContainer';

export default class BoardContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blackIsTurn: true,
      board: this.initBoard(),
    };

    this.onSetStone = this.onSetStone.bind(this);
  }

  initBoard() {
    const board = [];
    for (let row = 0; row < 19; row++) {
      board.push([]);
      board[row].push(new Array(19));
      for (let col = 0; col< 19; col++) {
        board[row][col] = null;
      }
    }
    return board;
  }

  onSetStone(row, col) {
    const { blackIsTurn, board } = this.state;

    board[row][col] = blackIsTurn;
    this.setState({
      blackIsTurn: !blackIsTurn,
      board,
    });
    
    this.calculateWinner(row, col, blackIsTurn);
  }

  calculateWinner(row, col, blackIsTurn) {
    const { onWinner } = this.props;

    if (this.Horizon(row, col) || this.Vertical(row, col) || 
        this.Diagonal(row, col) || this.AntiDiagonal(row, col)) {
      onWinner(`${ blackIsTurn ? 'black' : 'white' } win!`);
    }
  }

  Horizon(row, col) {
    const { board } = this.state;

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

  Vertical(row, col) {
    const { board } = this.state;

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

  Diagonal(row, col) {
    const { board } = this.state;

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

  AntiDiagonal(row, col) {
    const { board } = this.state;

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

  render() {
    const { blackIsTurn } = this.state;

    return (
      <div className='board-container'>
        <Board />
        <StoneContainer
          blackIsTurn={ blackIsTurn }
          onClick={ this.onSetStone } />
      </div>
    );
  }
}
