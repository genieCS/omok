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
    for (let row = 0; row < 18; row++) {
      board.push([]);
      board[row].push(new Array(18));
      for (let col = 0; col< 18; col++) {
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
