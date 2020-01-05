import React, { Component } from 'react';
import '../styles/Board.css';
import BoardSquare from './BoardSquare';

export default class Board extends Component {
	constructor(props) {
		super(props);

		this.state = {
			board: this.initCoordinates(),
		};
	}

	initCoordinates() {
		const board = [];
		for (let row = 0; row < 18; row++) {
			board.push([]);
			board[row].push(new Array(18));
			for (let col = 0; col< 18; col++) {
				board[row][col] = { row, col };
			}
		}
		return board;
	}

	initBoard() {
		const { board } = this.state;

		return (board.map(row => row.map(col => (
			<BoardSquare key={ `${ col.row } ${ col.col }` } />
		))));
	}

	render() {
		return (
			<div className='board' >
				{ this.initBoard() }
			</div>
		);
	}
}

