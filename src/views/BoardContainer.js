import React, { Component } from 'react';
import '../styles/BoardContainer.css';
import Board from './Board';
import StoneContainer from './StoneContainer';
import { winnerDetermined } from '../models';

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
    const { board } = this.state;

    if (winnerDetermined(board, row, col)) {
      onWinner(`${ blackIsTurn ? 'black' : 'white' } win!`);
    }
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
