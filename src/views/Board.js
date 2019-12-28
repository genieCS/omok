import React, { Component } from 'react';
import '../styles/Board.css';

export default class Board extends Component {
	constructor(props) {
		super(props);

		this.state = {
			board: Array.from({ length:18 }, () => (
				Array.from({ length:18 }, ()=> null)
		 ))
		};
	}


	initSquare() {
		return <div className='square'></div>;
	}

	initBoard() {
		const { board } = this.state;
		return (board.map(row => row.map(col => this.initSquare())) );
	}

	render() {
		return (
			<div className="board">
				{ this.initBoard() }
			</div>
		);
	}
}

